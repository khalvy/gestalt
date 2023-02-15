---
title: Toast
description: Toasts are brief and small messages that overlay content, but do not block the user’s flow, as they are out of the way and ephemeral. Toasts do not require user action and primarily acknowledge that a user has performed an action or completed a task.
fullwidth: true
---

<ImgContainer src="https://i.pinimg.com/originals/fc/72/92/fc7292986925d7c8a21030b3d3b668eb.jpg" noPadding alt="an example of toast"/>

## Usage guidelines

<TwoCol>
  <Group>
    <Do title="When to use" />    
    - Briefly acknowledging a user action without interrupting their flow.
    - When acknowledging an action that relates to another surface, provide a link that navigates the user to that surface.
    - To undo actions after acknowledgement, if there isn’t already a way to do so on the current surface.
    - For system processes like showing that a process is loading, or when there are internet connectivity issues.
  </Group>
  <Group>
  <Dont title="When not to use" />
  - When, due to an error, a user can’t even continue performing basic tasks like browsing already loaded Pins.
  - When asking a user to confirm that they want to perform an action. Use [Sheet](/android/sheet) instead.
  - When you want to suggest a user spend more money or try new features; use [Upsell](/web/upsell) instead.
  - For errors that relate to a specific section or page. Use [Callout](/web/callout) or [SlimBanner](/web/slimbanner) instead.
  - To guide or educate the user. Use [Popover](/web/popover) or [Tooltip](/web/tooltip) instead.
  </Group>
</TwoCol>

## Best practices
<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/83/f2/73/83f2732a36f12d81fdbd5bdd39d87fe0.jpg" alt="example with toast with unblocking placement"/>
    <Do title="Do" />
    Place Toasts out of the way so that a user can still navigate and complete tasks. Keep a top or bottom margin that is the same size as the left and right margins.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/a9/45/1c/a9451c70ca245a7cf791184c6bedf37a.jpg"/>
    <Dont title="Don't" />
    Block navigation controls with Toasts or align too close to the edge of a navigation bar.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/c2/47/d5/c247d5c2865747c1282aa95efc2a1e27.jpg" alt="example of showing one toast"/>
    <Do title="Do" />
    Show one Toast at a time, with errors and acknowledgements taking priority.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/2f/a2/7b/2fa27bece8bf6fb9f3ce39d76705d85f.jpg" alt="example of showing multiple toasts"/>
    <Dont title="Don't" />
    Stack multiple toasts as that will block the user.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/19/5a/a1/195aa1abe017dab4d30498e9aaed9fab.jpg" alt="example of a dismissible toast"/>
    <Do title="Do" />
    Include a way to dismiss the toast when it is actionable or contains multiple lines of text. Mobile toasts can be dismissed via swiping down on the toast.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/f0/ae/4d/f0ae4d1e7bf7d041d55cc7cfb09dc27d.jpg" alt="example of leaving a toast on screen"/>
    <Dont title="Don't" />
    Leave toasts on screen for a long time without a way to dismiss. Exceptions are blocking error toasts where a user can’t take any action until the error is resolved.
  </Group>
</TwoCol>

## Accessibility

People use Android’s accessibility features, such as TalkBack and dynamic text sizing to personalize how they interact with their devices. Supporting these personalizations ensures that everyone has a great user experience. See Material Design and development documentation about accessibility for Android:

[Accessbile design on Android](https://material.io/design/usability/accessibility.html#understanding-accessibility)
[Accessible development on Android](https://developer.android.com/guide/topics/ui/accessibility)

### Duration
Some people may take longer to read toasts than others due to aging, low vision, or cognitive impairments. Use the guide below to set duration for Toasts:

- Brief text of approximately 10–15 words (including button text): 5 seconds
- Longer than 15 words: Slow readers can read about 125–200 words per minute. Base your duration on the slowest number. For example, a toast with 20 words should be set to 10s. [Source](https://capitalizemytitle.com/reading-time/3000-words/)

## Variants

### Type

<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/43/35/fa/4335fa98d256e229ede1dfd661a07794.jpg" noPadding alt="default toast"/>
    
    **Default**
    A generic acknowledgment after an action is taken.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/e9/86/c5/e986c55cc7e96b1dd7d73b0246d5a10f.jpg" noPadding alt="error toast"/>
   
    **Error**
    Used rarely for connection issues or unknown errors where we don’t want to completely block the users flow, but want the message to persist if the user goes to another surface. Providing a way to solve the error or get help is recommended.
  </Group>
  
</TwoCol>

### Images & graphics

<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/43/35/fa/4335fa98d256e229ede1dfd661a07794.jpg" noPadding alt="text only toast"/>
    
    **Text only**
    A simple, generic acknowledgment after an action is taken These should not be actionable.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/f9/27/0f/f9270ff0c08c4aef539499c00e758a31.jpg" noPadding alt="toast with image"/>
    
    **Image**
    With an image for Pin or Board actions.
  </Group>
</TwoCol>
<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/3c/e3/86/3ce386fed81bcde2807e60d83e6934a7.jpg" noPadding alt="toast with avatar"/>
    
    **Avatar**
    With an Avatar for Profile or Pinner-related messaging. An optional link can be included. When there’s a link on mWeb, the entire toast is tappable, using TapArea.
  </Group>
  <Group>

  </Group>
</TwoCol>

### Navigation

<TwoCol>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/c9/cf/0a/c9cf0acedda2f7a5ae941a1b3d3572a7.jpg" noPadding alt="toast with button"/>
    
    **Button**
    As a secondary element, to drive users to another surface, or change a recently completed action.
  </Group>
  <Group>
    <ImgContainer src="https://i.pinimg.com/originals/a2/75/87/a275877c14a915ce575fcb18c9cf9935.jpg" noPadding alt="toast with link"/>
    
    **Link**
    As a secondary element, to drive users to another surface.
  </Group>
</TwoCol>

### Placement

Placement is always centered at the top or bottom of the screen and not blocking any navigation or important buttons.

## Writing

<TwoCol>
  <Group>
    <Do title="Do" />      
  - Consider internationalization and how other languages may be take up more space
  - Be brief and concise
  - Use conversational language
  </Group>
  <Group>
  <Dont title="Don't" />
  - Use lengthy, technical jargon or local idioms that will be hard to translate to other languages
  </Group>
</TwoCol>
