import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

type StarRatingProps = {
  rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;

  for (let i = 0; i < full; i++)
    stars.push(<StarOutlinedIcon key={`f-${i}`} className="text-yellow-400" />);
  if (half)
    stars.push(<StarHalfOutlinedIcon key="half" className="text-yellow-400" />);
  while (stars.length < 5)
    stars.push(
      <StarBorderOutlinedIcon
        key={`e-${stars.length}`}
        className="text-yellow-400"
      />
    );

  return <div className="flex items-center">{stars}</div>;
}
