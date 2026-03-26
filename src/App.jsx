import "./App.scss";
import Categories from "./components/categories/categories.component";

function App() {
  const categories = [
    {
      id: 1,
      name: "3D Prints",
      description: "Description of 3D Prints",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600",
    },
    {
      id: 2,
      name: "Notion Templates",
      description: "Description of Notion Templates",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=600",
    },
    {
      id: 3,
      name: "VS Code Themes",
      description: "Description of VS Code Themes",
      link: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    },
    {
      id: 4,
      name: "Wallpapers",
      description: "Description of Wallpapers",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    },
  ];

  return <Categories categories={categories} />;
}

export default App;
