import Handle from "@/components/pages/Handle";

export default function HandlePage({ params }: { params: { handle: string } } ) {
  return (
    <Handle handle={params.handle} />
  );
}