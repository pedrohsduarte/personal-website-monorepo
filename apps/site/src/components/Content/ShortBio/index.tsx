interface ShortBioProps {
  shortBio: string[];
}

export const ShortBio: React.FC<ShortBioProps> = ({ shortBio: bio }) => {
  return (
    <div className='flex flex-col gap-4'>
      {bio.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
