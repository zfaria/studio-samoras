/**
 * Utility to calculate current business open status based on studio operating hours:
 * Tuesday (2) to Sunday (0): 08:00 to 18:00
 * Monday (1): Closed
 */
export function getStudioStatus(): { isOpen: boolean; statusText: string; detailText: string } {
  const now = new Date();
  
  // Convert to Brazil/Sao Paulo timezone (UTC-3)
  const spTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  const day = spTime.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday, ...
  const hour = spTime.getHours();
  const minute = spTime.getMinutes();
  const timeInMinutes = hour * 60 + minute;

  const openMinute = 8 * 60; // 08:00
  const closeMinute = 18 * 60; // 18:00

  // Monday is closed
  if (day === 1) {
    return {
      isOpen: false,
      statusText: "Fechado hoje",
      detailText: "Reabrimos terça-feira às 08:00",
    };
  }

  // Tuesday to Sunday: 08:00 - 18:00
  if (timeInMinutes >= openMinute && timeInMinutes < closeMinute) {
    return {
      isOpen: true,
      statusText: "Aberto agora",
      detailText: "Atendimento hoje até às 18:00",
    };
  } else if (timeInMinutes < openMinute) {
    return {
      isOpen: false,
      statusText: "Fechado no momento",
      detailText: "Abre hoje às 08:00",
    };
  } else {
    // After 18:00
    const nextDay = (day + 1) % 7;
    const nextDayIsMonday = nextDay === 1;
    return {
      isOpen: false,
      statusText: "Fechado no momento",
      detailText: nextDayIsMonday ? "Reabrimos terça-feira às 08:00" : "Reabrimos amanhã às 08:00",
    };
  }
}
