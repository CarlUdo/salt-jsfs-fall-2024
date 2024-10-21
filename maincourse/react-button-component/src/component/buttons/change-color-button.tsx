import { getRandomColor } from '../../libs/get-random-color';
import styles from './button.module.css';

export function ChangeColorButton() {

  const handleClick = () => {
    document.body.style.backgroundColor = getRandomColor();    
  }
  
  return (
    <button 
      className={styles.button}

      onClick={handleClick}>    
      Change background color
    </button>
  )
}