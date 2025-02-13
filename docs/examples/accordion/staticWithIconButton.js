// @flow strict
import { type Node as ReactNode, useRef, useState } from 'react';
import { Accordion, Box, IconButton, Popover, Text } from 'gestalt';

export default function Example(): ReactNode {
  const [showPopover, setShowPopover] = useState(false);
  const anchorRef = useRef<HTMLElement | null>(null);

  return (
    <Box padding={8} height="100%" display="flex" alignItems="center" justifyContent="center">
      <Box column={12} maxWidth={800} padding={2}>
        <Accordion
          iconButton={
            <IconButton
              bgColor="lightGray"
              icon="question-mark"
              iconColor="darkGray"
              accessibilityLabel="Get help"
              size="xs"
              onClick={() => {
                setShowPopover((currVal) => !currVal);
              }}
              ref={anchorRef}
            />
          }
          id="accordionExample - iconButton"
          title="Title"
        >
          <Text size="200">This is example content.</Text>
        </Accordion>

        {showPopover && (
          <Popover
            anchor={anchorRef.current}
            idealDirection="right"
            onDismiss={() => setShowPopover(false)}
            shouldFocus={false}
          >
            <Box padding={3}>
              <Text weight="bold">Help content!</Text>
            </Box>
          </Popover>
        )}
      </Box>
    </Box>
  );
}
