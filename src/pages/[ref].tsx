import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { ref } = router.query;

  return <div>Ref: "{ref}"</div>;
}
