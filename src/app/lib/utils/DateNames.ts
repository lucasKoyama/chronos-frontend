export class DateNames {
  private static daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private static months: string[] = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  private readonly date: Date;

  constructor(date: Date) {
    this.date = new Date(date);
  }

  public getDayOfWeekName(): string {
    return DateNames.daysOfWeek[this.date.getDay()];
  }

  public getMonthName(): string {
    return DateNames.months[this.date.getMonth()];
  }

  public getDayOfMonth(): number {
    return this.date.getDate();
  }
}
