import {useEffect, useState} from 'react';
import Alert from 'react-bootstrap/Alert';

interface Props {
  showValue: boolean
}

export default function Snackbar({showValue = false}: Props) {
  const [show, setShow] = useState(showValue);
  useEffect(() => {
    setShow(showValue)
  }, [showValue]);
  return (
    <div className="mt-4">
      { show && (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Pet salvo!</Alert.Heading>
        </Alert>
      )}
    </div>
  );
}
