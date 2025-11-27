import MenuCard from "./menucard";
import menuItems from "../data/menuItems";

export default function MenuSection() {
  return (
    <div className="flex flex-wrap justify-center">
      {menuItems.map((item) => (
        <MenuCard
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}
