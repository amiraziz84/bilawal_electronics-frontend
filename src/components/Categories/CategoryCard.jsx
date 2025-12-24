const CategoryCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="h-[180px] flex items-center justify-center bg-[#f4f5f7] rounded-t-xl">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[120px] object-contain"
        />
      </div>

      <div className="p-4 text-center">
        <h2 className="text-[16px] font-medium text-[#222]">
          {item.title}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;
