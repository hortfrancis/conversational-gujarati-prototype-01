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

  if (!englishText || !phoneticGujaratiText || !gujaratiText) {
    return null;
  }

  return (
    <div className="w-full p-4 sm:p-5 space-y-4">
      <dl className="space-y-4">
        <div className="space-y-1">
          <dt className="text-sm italic tracking-wide text-zinc-500">English</dt>
          <dd className="text-base leading-relaxed text-zinc-900 break-words whitespace-pre-wrap">
            {englishText ? (
              <strong className="font-medium">{englishText}</strong>
            ) : (
              <span className="text-zinc-400 italic">...</span>
            )}
          </dd>
        </div>

        <div className="space-y-1">
          <dt className="text-sm italic tracking-wide text-zinc-500">Phonetic</dt>
          <dd className="text-base leading-relaxed text-zinc-900 break-words whitespace-pre-wrap">
            {phoneticGujaratiText ? (
              <strong className="font-medium italic">{phoneticGujaratiText}</strong>
            ) : (
              <span className="text-zinc-400 italic">...</span>
            )}
          </dd>
        </div>

        <div className="space-y-1">
          <dt className="text-sm italic tracking-wide text-zinc-500">Gujarati</dt>
          <dd className="text-base leading-relaxed text-zinc-900 break-words whitespace-pre-wrap font-serif" lang="gu">
            {gujaratiText ? (
              <strong className="font-semibold">{gujaratiText}</strong>
            ) : (
              <span className="text-zinc-400 italic">...</span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
};
