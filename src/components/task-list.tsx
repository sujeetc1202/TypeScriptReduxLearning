import Task from './task';
import { useAppSelector } from '../lib/hooks';

const TaskList = () => {
  // const { tasks } = useContext(ApplicationContext);

  // const tasks = useSelector((state: ApplicationState) => state.tasks.entities);
  const tasks = useAppSelector((state) => state.tasks.entities);

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
