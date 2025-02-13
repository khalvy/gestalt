// @flow strict
import { type Node as ReactNode } from 'react';
import { BannerCallout, BannerSlim, Box, Flex } from 'gestalt';

export default function Example(): ReactNode {
  return (
    <Box padding={8} height="100%" display="flex" alignItems="center" justifyContent="center">
      <Flex width="100%" direction="column" gap={{ column: 2, row: 0 }}>
        <BannerCallout
          dismissButton={{
            accessibilityLabel: 'Dismiss this banner',
            onDismiss: () => {},
          }}
          iconAccessibilityLabel="Info"
          message="Measure the impact tags have on your business by adding and managing tags"
          primaryAction={{
            accessibilityLabel: 'Get started with tags',
            href: 'https://pinterest.com',
            label: 'Get started with tags',
            target: 'blank',
            role: 'link',
          }}
          title="Use Tag manager to optimize your advertiser spend"
          type="info"
        />
        <BannerSlim
          type="warning"
          message="You haven't added any tags."
          iconAccessibilityLabel="Warning"
        />
      </Flex>
    </Box>
  );
}
