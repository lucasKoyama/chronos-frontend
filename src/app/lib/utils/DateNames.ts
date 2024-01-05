export class DateNames {
  private static daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private static months: string[] = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  private readonly date: Date;

  constructor(date: Date) {
    this.date = new Date(date);
  }

  public formatDateToInput(): string {
    const [day, month, year, , time] = this.date.toLocaleString().slice(0, -3).split(/[/, ]/);
    return `${year}-${month}-${day}T${time}`;
  }
}
