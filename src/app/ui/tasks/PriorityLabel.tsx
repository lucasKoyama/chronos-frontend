export default function PriorityLabel({
  urgency, importance
} : {
  readonly urgency: number, readonly importance: number,
}
) {
let label = '';
const high = 6;
const low = 5;

if (urgency >= high && importance >= high) {
  label = 'now'
} else if (urgency <= low && importance >= high) {
  label = 'later'
} else if (urgency >= high && importance <= low) {
  label = 'delegate'
} else {
  label = 'discard'
}
const labelStyle: Record<string, string> = {
  now: 'bg-red-50 text-red-700 ring-red-600/10',
  later: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
  delegate: 'bg-purple-50 text-purple-700 ring-purple-700/10',
  discard: 'bg-gray-50 text-gray-600 ring-gray-500/10',
}
const styles: string = labelStyle[label];
const badgeStyle = `min-w-14 mx-1.5 text-center rounded-md px-1.5 py-1.5 text-sm font-medium ring-1 ring-inset ${styles}`
return <span className={badgeStyle}>{label}</span>
}