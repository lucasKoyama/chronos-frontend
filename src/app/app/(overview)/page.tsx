import { Metadata } from "next"

export const metadata: Metadata = { title: 'Home' }

export default function Page() {
  // TO-DO: refactor those functions to lib in utils of date functions to be used in other pages
  const today = new Date();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const dayOfWeekInNum = today.getDay();
  const todayWeekName = daysOfWeek[dayOfWeekInNum];

  const todayMonthName = months[today.getMonth()];
  const todayDay = today.getDate();

  console.log(todayDay);
  return (
    <section>
      <header className="pb-5 border-b-2 border-gray-200">
        <h2 className="text-5xl font-extrabold text-blue-950 drop-shadow-2xl">Today</h2>
        <section className="flex items-end mt-2.5 mb-1.5">
          <h2 className="text-4xl font-extrabold text-blue-950 drop-shadow-2xl mr-2.5">
            {todayWeekName.slice(0, 3)}
          </h2>
          <h3 className="text-2xl font-bold text-gray-500 drop-shadow-2xl">
            {`${todayDay} ${todayMonthName.slice(0, 3)}`}
          </h3>
        </section>
      </header>
    </section>
  )
}