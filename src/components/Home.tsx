import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './Home.module.css';

import { ListTask } from './ListTask';
import { Header } from './Header';
import { InputAddTask } from './InputAddTask';
import { ClipboardText } from 'phosphor-react';

type task = {
    id: number;
    isCompleted: boolean;
    content: string;
};

export function Home() {
    const [tasks, setTasks] = useState<task[]>([]);
    const [newContentTask, setNewContentTask] = useState('');
    const [checked, setChecked] = useState({
        checked: false,
        id: 0,
    });
    const [taskIsCpmpleted, setTaskIsCompleted] = useState<task[]>([]);

    let idRandom = Math.random() * 20;

    function handleCheckedTask(e: any) {
        tasks.map((tes) => {
            if (tes.id == e.target.id) {
                tes.isCompleted = e.target.checked;
                setChecked({
                    checked: tes.isCompleted,
                    id: tes.id,
                });
            }
        });

        let taskIsCompleted = tasks.filter(
            (element) => element.isCompleted == true
        );
        setTaskIsCompleted(taskIsCompleted);
    }

    function createNewTask(event: FormEvent) {
        event.preventDefault();
        if (!newContentTask) {
            alert('Preencha a tarefa!');
            return;
        }
        setTasks([
            ...tasks,
            {
                id: idRandom,
                isCompleted: false,
                content: newContentTask,
            },
        ]);
        setNewContentTask('');
    }

    function newTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewContentTask(event.target.value);
    }

    function deleteComment(id: number) {
        const taskWithoutDeletedOne = tasks.filter((task: any) => {
            return task.id !== id;
        });
        setTasks(taskWithoutDeletedOne);
        setTaskIsCompleted(taskWithoutDeletedOne);
    }

    return (
        <>
            <Header />

            <InputAddTask
                createNewTask={createNewTask}
                newTaskChange={newTaskChange}
                newContentTask={newContentTask}
            />

            <div className={styles.listTask}>
                <div className={styles.contador}>
                    <span className={styles.taskCriada}>
                        Tarefas cridas <span>{tasks.length}</span>
                    </span>
                    <span className={styles.taskConcluida}>
                        Concluidas
                        <span>
                            {taskIsCpmpleted.length} de {tasks.length}
                        </span>
                    </span>
                </div>
                {tasks.length > 0 ? (
                    tasks.map((task: any) => {
                        return (
                            <ListTask
                                id={task.id}
                                key={task.content}
                                content={task.content}
                                isCompleted={
                                    task.id == checked.id
                                        ? checked.checked
                                        : task.isCompleted
                                }
                                onDeleteTask={deleteComment}
                                CheckedTask={handleCheckedTask}
                            />
                        );
                    })
                ) : (
                    <div className={styles.noTasks}>
                        <ClipboardText className={styles.clipBoard} size={60} />

                        <div>
                            <p>
                                <strong>
                                    Você ainda não tem tarefas cadastradas
                                </strong>
                            </p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
