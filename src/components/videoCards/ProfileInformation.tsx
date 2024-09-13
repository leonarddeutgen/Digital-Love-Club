import { useContext } from "react";
import { ISnippet } from "../../models/ISnippet";
import Accordion from "react-bootstrap/Accordion";
import { ThemeContext } from "../../context/ThemeContext";

interface InformationProps {
  selectedDj: ISnippet | undefined;
}

export const ProfileInformation = ({ selectedDj }: InformationProps) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{`More info about ${selectedDj?.snippet.title
            .split("|")[0]
            .trim()}`}</Accordion.Header>
          <Accordion.Body
            style={{
              backgroundColor: theme.background,
              color: theme.color,
            }}
          >
            {selectedDj?.snippet.description}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
