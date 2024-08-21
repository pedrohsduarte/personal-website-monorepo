import WithEducationTimeline from '@/components/withEducationTimeline';
import WithProfessionalExperienceTimeline from '@/components/withProfessionalExperienceTimeline';

export default function Resume() {
  return (
    <div className='space-y-16'>
      <h1 className='text-5xl font-bold'>My Resume</h1>
      <h2 className='text-3xl font-bold'>Education</h2>
      <WithEducationTimeline />
      <h2 className='text-3xl font-bold'>Professional Experience</h2>
      <WithProfessionalExperienceTimeline />
    </div>
  );
}
