import Task from './task';
import { useAppSelector, useTasks } from '../lib/hooks';
import Loading from './loading';

const TaskList = () => {
  // const { tasks } = useContext(ApplicationContext);

  // const tasks = useSelector((state: ApplicationState) => state.tasks.entities);
  // const tasks = useAppSelector((state) => state.tasks.entities);
  const [tasks, loading] = useTasks();

  return (
    <section className="task-list">
      <Loading loading={loading} />
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
