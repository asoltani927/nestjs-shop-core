export class DateService {
  dateWithMonthsDelay(months: any) {
    const date = new Date();
    date.setMonth(date.getMonth() + months);

    return date;
  }

  subWeeks(weeks = 1) {
    const date = new Date();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    date.setDate(date.getDate() - weeks * 7);
    return date;
  }

  subDays(days = 1) {
    const date = new Date();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    date.setDate(date.getDate() - (days - 1));
    return date;
  }

  subMonths(months = 1) {
    const date = new Date();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    date.setDate(date.getDate() - (months - 1) * 30);
    return date;
  }

  differenceMonths(d1: Date, d2: Date) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }

  getMonthShortName(num: number): string {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (months[num - 1] !== undefined) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return months[num - 1];
    }
    return null;
  }
}

export const DateTool = new DateService();
