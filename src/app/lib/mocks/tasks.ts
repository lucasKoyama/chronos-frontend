import { task } from "../types/task";

const tasks: task[] = [
  {
    id: '1',
    title: 'Lorem Ipsum 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum tristique tincidunt. Morbi ex est, dignissim vitae leo tristique, tempor cursus eros. Duis ac nisi mattis, vulputate tortor vitae, molestie lorem. Maecenas sagittis pulvinar odio, cursus vulputate ligula accumsan quis. Aenean ut fringilla magna, quis iaculis urna. Nulla vehicula lorem eget ligula rhoncus, eget tristique ipsum pulvinar. Donec magna ante, tempus quis ligula at, placerat tempus lectus.',
    scheduled: new Date(),
    finished: false,
    urgency: 8,
    importance: 8
  },
  {
    id: '2',
    title: 'Lorem Ipsum 2',
    description: 'Aliquam ultricies, erat non fringilla condimentum, urna leo posuere enim, ut sagittis dolor arcu malesuada nulla. Donec tristique ante vel luctus tempor. Maecenas sollicitudin dignissim vestibulum. Sed venenatis hendrerit ex eu ultricies. Nam faucibus elementum nisl. Praesent fringilla enim mi, id ultrices massa luctus a.',
    scheduled: new Date(),
    finished: false,
    urgency: 4,
    importance: 8
  },
  {
    id: '3',
    title: 'Lorem Ipsum 3',
    description: 'Morbi malesuada eros sit amet sem venenatis, ac sodales lacus egestas. Donec vel diam ac enim lobortis volutpat sed tempus felis. Donec venenatis enim mauris, vel tristique sapien blandit et. In hac habitasse platea dictumst. Vivamus pulvinar justo id odio elementum, id auctor justo pellentesque. Aliquam tincidunt condimentum sapien sit amet blandit.',
    scheduled: new Date(),
    finished: false,
    urgency: 8,
    importance: 4
  },
  {
    id: '4',
    title: 'Lorem Ipsum 4',
    description: 'Quisque tortor metus, ultricies lacinia nibh at, sagittis viverra sapien. Curabitur volutpat ornare dictum. Proin ut placerat eros. Vestibulum vehicula ante tortor, vitae ultricies ligula vestibulum in. Vivamus a consectetur arcu, ut dignissim felis.',
    scheduled: new Date(),
    finished: false,
    urgency: 4,
    importance: 4
  }
]

export default tasks;