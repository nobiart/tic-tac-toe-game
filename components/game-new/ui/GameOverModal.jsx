import { UIModal } from "../../uiKit/UIModal";
import { UIButton } from "../../uiKit/UIButton";

export function GameOverModal({ winnerName, players }) {
  return (
    <UIModal
      width="md"
      isOpen={!!winnerName}
      onClose={() => console.log("closed")}
    >
      <UIModal.Header>Modal Header</UIModal.Header>
      <UIModal.Body>
        <div className="text-sm">
          Winner: <span className="text-green-600">{winnerName}</span>
        </div>
        <div className="justify-between grid grid-cols-2 gap-3 mt-2">
          {players}
        </div>
      </UIModal.Body>
      <UIModal.Footer>
        <UIButton size="md" type="outline">
          Back
        </UIButton>
        <UIButton size="md" type="primary">
          Play Again
        </UIButton>
      </UIModal.Footer>
    </UIModal>
  );
}
