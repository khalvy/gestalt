// @flow strict
import { type Node as ReactNode } from 'react';
import { BannerSlim, Box, Flex, Link, Text } from 'gestalt';

export default function Example(): ReactNode {
  return (
    <Box padding={8}>
      <Flex direction="column" gap={6}>
        <Text weight="bold">Simple message string with helperText</Text>
        <BannerSlim
          type="info"
          message="This ad group is part of a campaign that is using campaign budget optimization. Changes to schedule or budget must be made at the campaign level."
          iconAccessibilityLabel="Information"
          helperLink={{
            text: 'Learn more',
            accessibilityLabel: 'Learn more about campaign budget optimization',
            href: 'http://www.pinterest.com',
            onClick: () => {},
          }}
        />

        <Text weight="bold">Rich message with Text component</Text>

        <BannerSlim
          type="recommendation"
          message={
            <Text inline>
              {' '}
              The campaign{' '}
              <Text inline weight="bold">
                Back to School
              </Text>{' '}
              is regularly hitting its{' '}
              <Link display="inline" href="">
                daily cap
              </Link>
              . Consider raising daily caps to increase scale for a similar CPC and CTR.
            </Text>
          }
          primaryAction={{
            accessibilityLabel: 'Increase spend',
            label: 'Increase spend',
            onClick: () => {},
            role: 'button',
          }}
          dismissButton={{
            accessibilityLabel: 'Dismiss banner',
            onDismiss: () => {},
          }}
          iconAccessibilityLabel="Recommendation"
        />
      </Flex>
    </Box>
  );
}
