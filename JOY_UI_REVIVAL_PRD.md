# Joy UI Revival & Base UI Integration PRD

## Executive Summary

This PRD outlines a comprehensive plan to revive MUI Joy UI within the existing MUI monorepo by leveraging the modern Base UI foundation, addressing critical open issues, and implementing missing components. Joy UI has been in beta since 2021 with irregular releases and missing components, while Base UI has evolved into a stable, unstyled component library with robust accessibility features. Our approach focuses on component improvements and bug fixes while maintaining the existing repository structure and build systems.

## Problem Statement

### Current Challenges
- **Development Stagnation**: Joy UI (v5.0.0-beta.49) has had irregular releases with gaps of 4+ months
- **Missing Core Components**: Pagination, Skeleton, ButtonGroup, Popover, Snackbar are notably absent
- **Integration Issues**: Problems using Joy UI with Material UI and other frameworks like Remix
- **Unclear Roadmap**: No public roadmap for component additions or stable release timeline
- **Community Uncertainty**: Questions about project abandonment due to release gaps

### Technical Debt
- **Architectural Constraints**: Joy UI's current implementation limits extensibility
- **Base UI Misalignment**: Not fully leveraging Base UI's latest capabilities
- **Performance Issues**: Menu onClose problems, prop handler gaps
- **TypeScript Gaps**: Incomplete type definitions for some components

## Solution Overview

### Phase 1: Assessment & Planning (Weeks 1-2)

#### 1.1 Current State Analysis
- [x] Fork MUI repository (completed - current repo)
- [x] Joy UI component audit (completed - 40+ components)
- [x] Base UI dependency analysis (completed)
- [x] Open issues categorization (completed)

#### 1.2 Base UI Migration Assessment  
- **Critical Discovery**: `@mui/base` is deprecated and replaced by `@base-ui-components/react@1.0.0-beta.1`
- **Current Joy UI State**: Uses deprecated `@mui/base@7.0.0-beta.4` with hooks like `useButton`, `useSwitch`, utilities like `composeClasses`
- **Migration Requirement**: Must migrate from `@mui/base` to `@base-ui-components/react` compound component patterns
- **API Changes**: Major breaking changes from individual hooks/utils to compound components (`<Switch.Root><Switch.Thumb>` pattern)

#### 1.3 Component Audit Results
**Existing Components** (40+ components including):
- Core: Accordion, Alert, AspectRatio, Avatar, Badge, Box, Button, Card
- Form: Autocomplete, Checkbox, Input, Select, Slider, Switch, Textarea
- Navigation: Breadcrumbs, Link, Menu, Tabs
- Layout: Grid, Stack, Sheet
- Data Display: Chip, Divider, List, Table, Typography
- Feedback: CircularProgress, LinearProgress
- Recently Added: Drawer (from issues research)

**Missing Critical Components**:
- Pagination (Issue #36373)
- Skeleton (Issue #36105) 
- ButtonGroup
- Popover
- Snackbar

### Phase 2: Base UI Migration (Weeks 3-8)

#### 2.1 Migration from @mui/base to @base-ui-components/react (Priority 1)

**Current @mui/base Usage in Joy UI:**
- **Hooks**: `useButton`, `useSwitch`, `useTabs`, `useModal`, `useSelect`, `useInput`
- **Utilities**: `composeClasses`, `generateUtilityClass`, `generateUtilityClasses`  
- **Components**: `Dropdown`, `MenuButton`, `Option`, `TabsProvider`

**Migration Strategy:**
1. **Component-by-Component Migration**:
   - Switch: `useSwitch` → `<Switch.Root><Switch.Thumb><Switch.Track>`
   - Button: `useButton` → `<Button.Root>` (or direct component)
   - Tabs: `useTabs` + `TabsProvider` → `<Tabs.Root><Tabs.List><Tabs.Panel>`
   - Input: `useInput` → `<Input.Root><Input.Control>`
   - Select: `useSelect` → `<Select.Root><Select.Trigger><Select.Portal>`

2. **Utility Migration**:
   - Replace `composeClasses` with Base UI's class composition
   - Migrate `generateUtilityClass` patterns to new Base UI approach
   - Update TypeScript definitions for new APIs

3. **Styling Preservation**:
   - Maintain Joy UI's existing design tokens and variants
   - Keep current CSS-in-JS styling approach
   - Preserve component API surface for backward compatibility

#### 2.2 Critical Bug Fixes (Priority 2)
- **Menu onClose Issues** (Issue #39683): Fix Menu appearing underneath Drawer  
- **Drawer Responsive Support** (Issue #38992): Add responsive/persistent state support
- **CssVarsProvider Integration**: Resolve undefined soft/md errors
- **TypeScript Improvements**: Complete type definitions for new Base UI APIs

### Phase 3: Missing Component Implementation (Weeks 9-12)

#### 3.1 Missing Component Implementation (Priority 1)
1. **Skeleton Component**
   - Leverage Base UI's foundation for accessibility
   - Implement Joy UI's design tokens and variants
   - Support text, circular, and rectangular variants
   - Wave animation with reduced motion respect

2. **Pagination Component**
   - Build on Base UI's Pagination for keyboard navigation
   - Joy UI styling with size/color variants
   - Compact and full display modes
   - Customizable page controls

3. **ButtonGroup Component**
   - Extend existing Button component patterns
   - Horizontal/vertical orientations
   - Size and variant consistency
   - Focus management between buttons

4. **Popover Component**
   - Base UI Popover integration
   - Joy UI positioning and styling
   - Accessible focus management
   - Portal support

5. **Snackbar Component**
   - Base UI foundation with Joy styling
   - Multiple positioning options
   - Auto-dismiss with pause on hover
   - Action button support

#### 2.3 Integration Improvements (Priority 3)
- **Material UI Coexistence**: Resolve CSS conflicts and theme provider issues
- **Remix Framework Support**: Fix SSR and hydration issues
- **Next.js App Router**: Ensure compatibility with latest Next.js patterns

### Phase 4: Enhanced Integration & Polish (Weeks 13-16)

#### 3.1 Styling Architecture Enhancement
- **Retain Joy Design System**: Preserve existing design tokens and theme structure
- **Base UI Styling Layer**: Create optional unstyled variants for maximum customization
- **CSS-in-JS Optimization**: Improve performance with Emotion/styled-components
- **Theme Extension**: Allow easy customization while maintaining Joy's aesthetics

#### 3.2 Accessibility Improvements
- **ARIA Compliance**: Leverage Base UI's robust accessibility foundation
- **Keyboard Navigation**: Enhance focus management across all components
- **Screen Reader Support**: Improve semantic markup and announcements
- **High Contrast Mode**: Ensure visibility in Windows High Contrast mode

#### 3.3 Developer Experience
- **TypeScript First**: Complete type safety for all components and APIs
- **Documentation Overhaul**: Interactive examples with live code editing
- **Migration Utilities**: Tools for moving from other UI libraries
- **Customization Guides**: Clear patterns for theming and component extension

### Phase 5: Ecosystem Integration & Release (Weeks 17-20)

#### 4.1 MUI Ecosystem Integration
- **MUI X Compatibility**: Ensure data grid and date picker integration
- **Icon Integration**: Seamless use with @mui/icons-material
- **System Integration**: Leverage @mui/system for layout utilities

#### 4.2 Testing & Quality Assurance
- **Unit Test Coverage**: 90%+ coverage for all components
- **Integration Tests**: Real-world usage scenarios
- **Visual Regression Tests**: Prevent styling regressions
- **Accessibility Testing**: Automated a11y checks in CI

#### 4.3 Release Preparation
- **Documentation Site**: Comprehensive component documentation
- **Migration Guide**: From Joy UI beta to stable release
- **Playground Environment**: Interactive component testing
- **Performance Benchmarks**: Bundle size and runtime performance metrics

## Technical Architecture

### Migration Component Structure
```
Joy UI Component (Before - @mui/base)
├── useButton/useSwitch hooks
├── composeClasses utilities
├── Joy Design System (tokens, variants, styling)
└── TypeScript Definitions

Joy UI Component (After - @base-ui-components/react)  
├── Base UI Compound Components (<Switch.Root><Switch.Thumb>)
├── Joy Design System (preserved tokens, variants, styling)
├── TypeScript Definitions (updated for new APIs)
└── Backward Compatibility Layer (preserves existing Joy API)
```

### Build Pipeline
- **TypeScript Compilation**: Source to ES modules and CommonJS
- **CSS Extraction**: Optimized stylesheets for production
- **Tree Shaking**: Minimal bundle impact
- **Source Maps**: Development debugging support

### Dependencies Strategy
- **New Base UI**: Migrate to `@base-ui-components/react@1.0.0-beta.1` 
- **Remove Deprecated**: Remove `@mui/base@7.0.0-beta.4` dependency
- **Peer Dependencies**: React 17/18/19, Emotion for styling
- **Optional Dependencies**: Integration packages for specific frameworks

## Success Metrics

### Technical Metrics
- **Bundle Size**: <50KB gzipped for core components
- **Performance**: <16ms render time for complex components
- **Accessibility**: 100% WCAG 2.1 AA compliance
- **TypeScript Coverage**: 100% typed APIs

### Community Metrics
- **GitHub Issues**: <50 open issues (currently 200+)
- **Release Cadence**: Monthly releases with clear changelog
- **Documentation**: <2 minute time-to-first-component
- **Adoption**: 10% growth in npm downloads within 6 months

### Compatibility Goals
- **React Versions**: Support 17.x, 18.x, 19.x
- **Framework Support**: Next.js, Remix, Vite, Create React App
- **Browser Support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Risk Mitigation

### Technical Risks
- **Base UI Breaking Changes**: Pin to stable versions, maintain compatibility layer
- **Performance Regression**: Continuous benchmarking and optimization
- **Bundle Size Growth**: Tree-shaking and code splitting strategies

### Community Risks
- **Adoption Hesitancy**: Clear migration path and stability commitment
- **Competing Libraries**: Focus on unique value proposition and DX
- **Maintenance Burden**: Automated testing and community contribution guidelines

## Timeline & Milestones

### Q1 2025 (Weeks 1-12)
- ✅ Assessment and planning (completed)
- 🎯 **BASE UI MIGRATION** - Migrate from deprecated @mui/base to @base-ui-components/react
- 🎯 Critical bug fixes and missing component implementation
- 🎯 First stable release candidate

### Q2 2025 (Weeks 13-20)
- 🎯 Enhanced Base UI integration and polish
- 🎯 Comprehensive testing and documentation
- 🎯 Stable v1.0 release

### Q3 2025 (Weeks 19+)
- 🎯 Advanced components and features
- 🎯 Ecosystem integrations
- 🎯 Performance optimization

## Expected Outcomes

### For Users
- **Modern Component Library**: Joy UI built on stable, accessible foundation
- **Complete Component Set**: All missing components implemented
- **Better Performance**: Optimized bundle size and runtime performance
- **Enhanced DX**: Better TypeScript support and documentation

### For MUI Ecosystem
- **Reduced Fragmentation**: Clear positioning vs Material UI and Base UI
- **Increased Adoption**: Stable alternative to Material Design
- **Community Growth**: Active development and contribution model

### For Base UI
- **Real-world Validation**: Joy UI as reference implementation
- **Feedback Loop**: Issues and improvements flow back to Base UI
- **Ecosystem Growth**: More libraries building on Base UI foundation

This PRD provides a comprehensive roadmap for reviving Joy UI by leveraging modern Base UI capabilities while addressing critical community needs and technical debt. The approach maintains Joy UI's unique design philosophy while ensuring long-term sustainability and growth.