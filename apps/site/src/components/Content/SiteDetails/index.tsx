export interface SiteDetailsProps {
  siteDetails: string[];
}

export const SiteDetails: React.FC<SiteDetailsProps> = ({ siteDetails }) => {
  return (
    <div className='flex flex-col gap-4'>
      {siteDetails.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
};
