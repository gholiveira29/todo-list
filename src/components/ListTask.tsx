import { Check, Trash } from 'phosphor-react';
import styles from './ListTask.module.css';
import { FormEvent } from 'react';

interface Task {
    id: number;
    isCompleted: boolean;
    content: string;
    onDeleteTask: (id: number) => void;
    CheckedTask: (e: any) => void;
}

export function ListTask({
    isCompleted = false,
    content,
    id,
    onDeleteTask,
    CheckedTask,
}: Task) {
    function handleDeleteTask(event: FormEvent) {
        event.preventDefault();
        onDeleteTask(id);
    }

    function handleCheckedTask(e: any) {
        CheckedTask(e);
    }

    return (
        <form className={styles.listContainer}>
            <div className={styles.task}>
                <div className={styles.radioContainer}>
                    <label>
                        <input
                            type="checkbox"
                            id={`${id}`}
                            checked={isCompleted}
                            onChange={(e) => handleCheckedTask(e)}
                        />
                        <div className={styles.customRadio}>
                            {isCompleted ? (
                                <span>
                                    <Check className={styles.check} />
                                </span>
                            ) : (
                                <span></span>
                            )}
                        </div>
                    </label>
                </div>

                <div className={styles.textContainer}>
                    {isCompleted ? (
                        <span className={styles.textIsCompleted}>
                            {content}
                        </span>
                    ) : (
                        <span className={styles.text}>{content}</span>
                    )}
                </div>
                <button onClick={handleDeleteTask}>
                    <Trash className={styles.trash} />
                </button>
            </div>
        </form>
    );
}
