import { ISnippet } from "../../models/ISnippet";
import Accordion from "react-bootstrap/Accordion";

interface InformationProps {
  selectedDj: ISnippet | undefined;
}

export const ProfileInformation = ({ selectedDj }: InformationProps) => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{`More info about ${selectedDj?.snippet.title
            .split("|")[0]
            .trim()}`}</Accordion.Header>
          <Accordion.Body>{selectedDj?.snippet.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
