import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function Selector({ onClick, loading }) {

  return (
    <p>
      Data for January 2023
      <Button
        variant="primary"
        onClick={!loading ? onClick : null}
        disabled={loading}>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          className={loading ? "" : "visually-hidden"}
        />
        {loading ? 'Loading…' : 'Click to load'}
      </Button>
    </p>
  );
}