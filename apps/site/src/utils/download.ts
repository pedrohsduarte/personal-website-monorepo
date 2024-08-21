export const handleDownload = (fileName: string, fileUrl: string) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
