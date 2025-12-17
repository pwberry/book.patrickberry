interface PlaceholderImageProps {
  className?: string;
  aspectRatio?: string;
  label?: string;
}

const PlaceholderImage = ({ 
  className = "", 
  aspectRatio = "aspect-video",
  label = "Image"
}: PlaceholderImageProps) => {
  return (
    <div className={`bg-muted flex items-center justify-center ${aspectRatio} ${className}`}>
      <span className="text-muted-foreground text-sm">{label}</span>
    </div>
  );
};

export default PlaceholderImage;
