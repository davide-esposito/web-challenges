import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ onAllLightsOff, onAllLightsOn, lights }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onAllLightsOff={onAllLightsOff}
        onAllLightsOn={onAllLightsOn}
        lights={lights}
      />
    </>
  );
}
