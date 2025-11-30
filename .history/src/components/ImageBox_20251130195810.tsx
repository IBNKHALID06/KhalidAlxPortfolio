type Props = { src: string };
export default function ImageBox({ src }: Props) {
  return <img src={src} className="rounded-lg border border-slate-700 shadow" />;
}