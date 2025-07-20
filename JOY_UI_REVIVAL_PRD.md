# Joy UI Base UI Migration

## Migration Status

**Current State**: Joy UI uses deprecated `@mui/base@7.0.0-beta.4` which is being replaced by `@base-ui-components/react@1.0.0-beta.1`.

**Goal**: Migrate all Joy UI components from `@mui/base` to `@base-ui-components/react` while maintaining 100% API compatibility.

## Migration Pattern (Proven with Input Component)

**Migration Insights from Input Component:**
- Base UI Input is a single `<Input />` component, not compound
- Component state exposed via HTML data attributes (`data-focused`, `data-invalid`, etc.)
- New `onValueChange` prop alongside traditional `onChange`
- Successfully maintained Joy UI's CSS-in-JS approach with Base UI foundation
- 100% API compatibility preserved

**Migration Steps:**
1. Create styled wrapper around Base UI component
2. Replace `@mui/base` hook with Base UI component integration
3. Convert `composeClasses` from `@mui/base` to `@mui/utils`
4. Convert Base UI events to React SyntheticEvents for compatibility
5. Use data attributes for state-based styling
6. Preserve existing component slot system
7. Maintain 100% API backward compatibility

## Migration Checklist: @mui/base → @base-ui-components/react

### Core Form Components (Foundation components that other components depend on)

- [x] **Input** (`src/Input/`) - ✅ COMPLETED
  - `useInput` → `<Input />`
  - Dependencies: `useInput` hook, `composeClasses`

- [ ] **Button** (`src/Button/`)
  - `useButton` → `<Button />`
  - Dependencies: `useButton` hook, `composeClasses`

- [ ] **Switch** (`src/Switch/`)
  - `useSwitch` → `<Switch.Root><Switch.Thumb>`
  - Dependencies: `useSwitch` hook, `composeClasses`

- [ ] **Checkbox** (`src/Checkbox/`)
  - `useCheckbox` → `<Checkbox.Root><Checkbox.Indicator>`
  - Dependencies: `useCheckbox` hook, `composeClasses`

- [ ] **Radio** (`src/Radio/`)
  - `useRadio` → `<Radio.Root><Radio.Indicator>`
  - Dependencies: `useRadio` hook, `composeClasses`

- [ ] **Slider** (`src/Slider/`)
  - `useSlider` → `<Slider.Root><Slider.Track><Slider.Thumb>`
  - Dependencies: `useSlider` hook, `composeClasses`

- [ ] **Select** (`src/Select/`)
  - `useSelect` → `<Select.Root><Select.Trigger><Select.Content>`
  - Dependencies: `useSelect`, `useOption`, `Dropdown`, `MenuButton`

### Navigation & Layout Components

- [ ] **Menu** (`src/Menu/`)
  - `useMenu` → `<Menu.Root><Menu.Trigger><Menu.Portal>`
  - Dependencies: `useMenu`, `Dropdown`, `MenuButton`, `composeClasses`

- [ ] **Tabs** (`src/Tabs/`)
  - `useTabs` + `TabsProvider` → `<Tabs.Root><Tabs.List><Tabs.Panel>`
  - Dependencies: `useTabs`, `TabsProvider`, `composeClasses`

- [ ] **Modal** (`src/Modal/`)
  - `useModal` → `<Modal.Root><Modal.Backdrop><Modal.Content>`
  - Dependencies: `useModal`, `ModalManager`, `Portal`

- [ ] **Autocomplete** (`src/Autocomplete/`)
  - `useAutocomplete` → `<Autocomplete.Root><Autocomplete.Input>`
  - Dependencies: `useAutocomplete`, `useOption`, `composeClasses`

- [ ] **MenuButton** (`src/MenuButton/`)
  - Base UI MenuButton → `<MenuButton.Root><MenuButton.Trigger>`
  - Dependencies: `MenuButton` from `@mui/base`, `composeClasses`

### Utility Components (67 components using only composeClasses/utilities)

- [ ] **Layout** (15): Box, Container, Grid, Stack, Sheet, AspectRatio, Card, CardActions, CardContent, CardCover, CardOverflow, Divider, List, ListItem, ListItemButton

- [ ] **Typography & Display** (20): Typography, Link, Chip, Badge, Avatar, AvatarGroup, Breadcrumbs, BreadcrumbsItem, Alert, AccordionGroup, Accordion, AccordionDetails, AccordionSummary, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, IconButton

- [ ] **Form & Input** (15): FormControl, FormHelperText, FormLabel, Textarea, Option, ListItemContent, ListItemDecorator, ListDivider, ListSubheader, RadioGroup, ScopedCssBaseline, ToggleButtonGroup, SvgIcon, StyledEngineProvider, Tab

- [ ] **Feedback & Progress** (8): CircularProgress, LinearProgress, Skeleton, ClickAwayListener, FocusTrap, GlobalStyles, Hidden, NoSsr

- [ ] **Navigation & Interaction** (9): Drawer, TabList, TabPanel, ModalClose, ModalDialog, ModalOverflow, Snackbar, Popover, ButtonGroup