interface OutputProps {
  englishText?: string;
  phoneticGujaratiText?: string;
  gujaratiText?: string;
}

export default function Output({
  englishText = '',
  phoneticGujaratiText = '',
  gujaratiText = ''
}: OutputProps) {

  return (
    <div>
      <p><i>English:</i> <strong>{englishText}</strong></p>
      <p><i>Phonetic Gujarati:</i> <strong>{phoneticGujaratiText}</strong></p>
      <p><i>Gujarati:</i> <strong>{gujaratiText}</strong></p>
    </div>


  );
};
