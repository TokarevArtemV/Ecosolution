import NavItem from './NavItem';
import s from './NavigationList.module.css';

const NavigationList = ({ itemList = {}, onClose }) => {
  return (
    <nav>
      <ul className={s.nav__list}>
        {Object.keys(itemList).length > 0 &&
          Object.keys(itemList).map((item, index) => (
            <NavItem
              key={index}
              title={itemList[item].title}
              link={itemList[item].link}
              skipItem={itemList[item].skip}
              onClose={onClose}
            />
          ))}
      </ul>
    </nav>
  );
};

export default NavigationList;
