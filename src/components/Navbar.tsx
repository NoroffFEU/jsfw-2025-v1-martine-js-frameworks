import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

function Navbar() {
  return (
    <nav className="p-8 flex justify-between items-center gap-12">
      <div className="text-3xl uppercase">Varivo</div>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded-xl w-full"
      />
      <div className="flex gap-4">
        <HeaderButton name="cart" background="bg-[#C6F6BA]" />
        <HeaderButton name="favorite" />
      </div>
    </nav>
  );
}

type HeaderButtonProps = {
  name: 'cart' | 'favorite';
  background?: string;
};

function HeaderButton({ name, background = 'bg-gray-100' }: HeaderButtonProps) {
  function onButtonClick() {
    console.log(`${name} button clicked`);
  }

  return (
    <button
      onClick={onButtonClick}
      className={`rounded-full p-3 ${background}`}
    >
      {name === 'cart' ? <LocalMallOutlinedIcon /> : <FavoriteBorderIcon />}
    </button>
  );
}

export default Navbar;
