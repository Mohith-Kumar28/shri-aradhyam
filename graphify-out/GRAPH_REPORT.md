# Graph Report - shri-aradhyam  (2026-08-17)

## Corpus Check
- 201 files · ~483,825 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 3732 nodes · 8791 edges · 167 communities (161 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 118 edges (avg confidence: 0.66)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4df77b3c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- live-browser.js
- checks.mjs
- context.mjs
- connectSSE
- design-system.mjs
- live-server.mjs
- detect-text.mjs
- hook-lib.mjs
- setLiveState
- detect-antipatterns.mjs
- el
- concept-seed.mjs
- modern-screenshot.umd.js
- detect-antipatterns-browser.js
- initPageChat
- live-commit-manual-edits.mjs
- css-cascade.mjs
- impeccable-config.mjs
- checkHtmlPatterns
- live-wrap.mjs
- manual-apply.mjs
- hook-admin.mjs
- svelte-component.mjs
- hook-before-edit.mjs
- live-poll.mjs
- design-parser.mjs
- Components
- live-accept.mjs
- generate-image.mjs
- devDependencies
- parseAnyColor
- doctor.mjs
- layout.md
- site-data.ts
- initGlobalBar
- parseAnyColor
- runHook
- live-copy-edit-agent.mjs
- live-inject.mjs
- injected/index.mjs
- impeccable-paths.mjs
- compilerOptions
- HEADING_TAGS
- event-validation.mjs
- roots.mjs
- new-work.md
- staleness.mjs
- insert-ui.mjs
- Responsive Design
- scanCssTextForPulsingDot
- handleManualEditActivity
- live-manual-edit-evidence.mjs
- layout.tsx
- collectVisualContrastCandidates
- mountSvelteComponentVariant
- live.md
- collectBrowserFindings
- tanstack-adapter.mjs
- svelte-ast.mjs
- onboard.md
- live.mjs
- GENERIC_FONTS
- franchise/page.tsx
- [slug]/page.tsx
- sveltekit-adapter.mjs
- The Toolkit
- accept-css.mjs
- manual-edit-routes.mjs
- handleGo
- impeccable/SKILL.md
- onAnnotDown
- ornament.tsx
- checkQuality
- detect-utils.mjs
- app/page.tsx
- resolveLiveInjectionAnchor
- animate.md
- Handle `generate`
- context-signals.mjs
- sampleCssBackground
- session-store.mjs
- inlineSvelteComponentAccept
- serve-question.mjs
- components.json
- story/page.tsx
- tasteskill: Anti-Slop Frontend Skill
- Appendix B - Canonical Sources (read these before reinventing)
- Generate Report
- critique-storage.mjs
- live-status.mjs
- Impeccable Asset Producer
- optimize.md
- StaticElement
- journal.mjs
- Scan mode (approach C: auto-extract, then confirm descriptive language)
- sampleCssBackground
- collectVisualContrastCandidates
- surface-briefs.mjs
- pin.mjs
- Product
- 4. DESIGN ENGINEERING DIRECTIVES (Bias Correction)
- Simplify the Design
- Hardening Dimensions
- scheduleLazyVisualContrast
- ui-core.mjs
- frameworks/index.mjs
- What to replace with real material
- clarify.md
- critique.md
- Nielsen's 10 Heuristics
- Generate Combined Critique Report
- New visual work
- polish.md
- quieter.md
- checkTextOcclusionDOM
- generation-preflight.mjs
- palette.mjs
- 10. REFERENCE VOCABULARY (Pattern Names the Agent Should Know)
- Init flow
- staleness-notice.mjs
- inline-ignores.mjs
- OPENING
- Common Cognitive Load Violations
- Operate mode depth (and Read notes)
- Shape
- SAFE_TAGS
- 9. AI TELLS (Forbidden Patterns)
- Persona-Based Design Testing
- Extract Flow
- iOS platform
- live-setup.md
- source-lock.mjs
- template-extensions.mjs
- APPENDICES - Real Source-Backed Reference Material
- 11. REDESIGN PROTOCOL
- 3. DEFAULT ARCHITECTURE & CONVENTIONS
- 6. PERFORMANCE & ACCESSIBILITY GUARDRAILS
- Android platform
- Generate Report
- Cognitive Load Assessment
- Impeccable Manual Edit Applier
- nuxt.mjs
- Diagnostic Scan
- bolder.md
- normalizeGitHubEvent
- source-search.mjs
- 12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)
- 5. CONTEXT-AWARE PROACTIVITY
- 8. DARK MODE PROTOCOL
- resolveObjectImageRect
- readConfig
- applyDeferredSvelteComponentAccepts
- 7. DIAL DEFINITIONS (Technical Reference)
- Heuristics Scoring Guide
- detect.mjs
- serializeFindings
- checkElementRadialSpotlightDOM
- hook.mjs
- provider.mjs
- README.md
- selectAvailablePendingEvent
- AGENTS.md
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `el()` - 51 edges
2. `runHook()` - 40 edges
3. `collectBrowserFindings()` - 36 edges
4. `parseAnyColor()` - 36 edges
5. `parseAnyColor()` - 33 edges
6. `setLiveState()` - 32 edges
7. `connectSSE()` - 30 edges
8. `detectHtml()` - 29 edges
9. `showToast()` - 29 edges
10. `createRequestHandler()` - 29 edges

## Surprising Connections (you probably didn't know these)
- `measureHiddenTextDOM()` --indirect_call--> `el()`  [INFERRED]
  .agents/skills/impeccable/scripts/detector/detect-antipatterns-browser.js → .agents/skills/impeccable/scripts/live-browser.js
- `buildSelectorSegment()` --references--> `css`  [EXTRACTED]
  .agents/skills/impeccable/scripts/detector/detect-antipatterns-browser.js → components.json
- `generateSelector()` --references--> `css`  [EXTRACTED]
  .agents/skills/impeccable/scripts/detector/detect-antipatterns-browser.js → components.json
- `measureHiddenTextDOM()` --indirect_call--> `el()`  [INFERRED]
  .agents/skills/impeccable/scripts/detector/rules/checks.mjs → .agents/skills/impeccable/scripts/live-browser.js
- `cssEscapeIdent()` --references--> `css`  [EXTRACTED]
  .agents/skills/impeccable/scripts/live-browser.js → components.json

## Import Cycles
- None detected.

## Communities (167 total, 6 thin omitted)

### Community 0 - "live-browser.js"
Cohesion: 0.03
Nodes (149): addManualContextText(), applyGlobalBarLabelState(), applyPlaceholderSizingStyles(), averageRgb01(), bindEditBadgeProxy(), bufferToBase64(), buildCollapsible(), buildColorModels() (+141 more)

### Community 1 - "checks.mjs"
Cohesion: 0.04
Nodes (97): borderColorsFromStyle(), borderWidthsFromStyle(), checkClippedOverflow(), checkEdgeFlushCardsDOM(), checkElementBlinkingCursorDOM(), checkElementClippedOverflow(), checkElementClippedOverflowDOM(), checkElementGptBorderShadow() (+89 more)

### Community 2 - "context.mjs"
Cohesion: 0.05
Nodes (89): appendAutonomyCounterDirective(), appendDetectorFallback(), appendImageGenDirective(), appendImageToolsDirective(), appendSubagentAuthorizationDirective(), appendSurfaceBriefContext(), automaticHookMode(), buildMissingTargetDirective() (+81 more)

### Community 3 - "connectSSE"
Cohesion: 0.06
Nodes (74): applyParamDefaults(), applyParamValue(), applySavedSessionMeta(), buildParamsPanel(), clampVariantIndex(), clearHandled(), clearSession(), closedClipPath() (+66 more)

### Community 4 - "design-system.mjs"
Cohesion: 0.07
Nodes (66): addClampEndpoints(), addColorObject(), addDesignColor(), addFontSizeStep(), addRoundedScale(), addRoundedToken(), addSidecarColors(), addSidecarRadii() (+58 more)

### Community 5 - "live-server.mjs"
Cohesion: 0.07
Nodes (63): assembleLiveBrowserScript(), assertLiveBrowserScriptParts(), LIVE_BROWSER_SCRIPT_PARTS, readLiveBrowserScriptParts(), resolveLiveBrowserScriptParts(), acknowledgePendingEvent(), activeSessionSummaries(), agentPollingConnected() (+55 more)

### Community 6 - "detect-text.mjs"
Cohesion: 0.07
Nodes (54): blankCssComments(), BLOCK_BRACE_PREFIX_KEYWORDS, CSS_IN_JS_EXTENSIONS, detectText(), extFromFilePath(), extractCSSinJS(), extractStyleBlocks(), findCSSinJSTemplates() (+46 more)

### Community 7 - "hook-lib.mjs"
Cohesion: 0.06
Nodes (60): ACK_EXTS, ADVISORY_RULES, applyConfigSource(), applyDetectorConfigSource(), canonicalPath(), canonicalPathCache, clampByte(), clampGroupedToBudget() (+52 more)

### Community 8 - "setLiveState"
Cohesion: 0.11
Nodes (57): abandonForeignSession(), abortSvelteComponentInjection(), cancelEditing(), cancelEditingToPicking(), cancelInsertConfigure(), cleanup(), cleanupAcceptedSession(), clearAnnotations() (+49 more)

### Community 9 - "detect-antipatterns.mjs"
Cohesion: 0.09
Nodes (48): confirm(), detectCli(), dim(), fileUrlToLocalPath(), formatAdvisorySection(), formatFindings(), formatFindingsBody(), formatFindingSummary() (+40 more)

### Community 10 - "el"
Cohesion: 0.07
Nodes (55): actionLabel(), applyConfigureBarChrome(), bindConfigureCountPillTooltip(), bindConfigureInlineControlHover(), bindConfigureModifierPillHover(), buildConfigureActionControl(), buildConfigureCountControl(), buildConfigureRow() (+47 more)

### Community 11 - "concept-seed.mjs"
Cohesion: 0.08
Nodes (48): API_BASE, API_TIMEOUT_MS, apiBudgetMs(), dealCompositions(), driveSelection(), fetchRoll(), here, loadLocal() (+40 more)

### Community 12 - "modern-screenshot.umd.js"
Cohesion: 0.09
Nodes (52): ae(), be(), bt(), Ce(), Ct(), de(), dt(), _e() (+44 more)

### Community 13 - "detect-antipatterns-browser.js"
Cohesion: 0.06
Nodes (47): browserColorsClose(), browserDesignSystemConfig(), browserHasDirectText(), browserPrimaryFont(), browserRadiusTokens(), browserSampleText(), checkBrowserDesignSystemSources(), checkClippedOverflow() (+39 more)

### Community 14 - "initPageChat"
Cohesion: 0.08
Nodes (50): armPageChatForTyping(), attachSteerFocusDebug(), attachSteerFocusGuard(), buildSteerProcessingDots(), buildSteerQueueHint(), clearSteerAwaitTimer(), clearSteerFocusRecoverTimer(), collapsePageChat() (+42 more)

### Community 15 - "live-commit-manual-edits.mjs"
Cohesion: 0.11
Nodes (49): allEntryIds(), argVal(), buildRepairBatch(), candidatesForEntry(), changedFilesSinceSnapshot(), clearAppliedEntries(), collectApplyOwnedFiles(), collectRollbackFiles() (+41 more)

### Community 16 - "css-cascade.mjs"
Cohesion: 0.08
Nodes (32): applyStaticDeclaration(), buildBorderOverrideMap(), buildStaticStyleMap(), buildStaticWindow(), collectStaticCssRules(), compareStaticPriority(), cssPropToCamel(), expandStaticBoxValues() (+24 more)

### Community 17 - "impeccable-config.mjs"
Cohesion: 0.10
Nodes (47): applyDetectionConfigSource(), clampByte(), cleanIgnoreValueDisplay(), cloneDetectionConfig(), cloneRawDetectionConfig(), colorIgnoreKey(), DEFAULT_DETECTION_CONFIG, DETECTOR_CONFIG_KEYS (+39 more)

### Community 18 - "checkHtmlPatterns"
Cohesion: 0.08
Nodes (45): ANIMATION_VALUE_KEYWORDS, buildHtmlPatternCorpora(), checkColors(), checkElementAIPaletteDOM(), checkElementGlowDOM(), checkElementRadialSpotlight(), checkElementRadialSpotlightDOM(), checkGlow() (+37 more)

### Community 19 - "live-wrap.mjs"
Cohesion: 0.12
Nodes (41): hasGeneratedHeader(), HEADER_MARKERS, isGeneratedFile(), isGitIgnored(), resolveLiveTemplateExtensions(), findSessionFile(), resolveSourceTraits(), argVal() (+33 more)

### Community 20 - "manual-apply.mjs"
Cohesion: 0.09
Nodes (40): addOpToManualApplyChunk(), APPLY_EVENT_HARD_TIMEOUT_MS, APPLY_EVENT_SOFT_DEADLINE_MS, buildManualApplyAgentAction(), clearManualApplyTransaction(), collectManualApplyFiles(), compactManualApplyBatch(), compactManualApplyCandidates() (+32 more)

### Community 21 - "hook-admin.mjs"
Cohesion: 0.12
Nodes (42): ACTIONS, addIgnoreFile(), addIgnoreRule(), addIgnoreValue(), DETECTOR_CONFIG_KEYS, detectorSection(), fileHasImpeccableHookMarker(), HOOK_MANIFEST_TARGETS (+34 more)

### Community 22 - "svelte-component.mjs"
Cohesion: 0.08
Nodes (40): buildPropsScriptV2(), loadSvelteCompiler(), appendCssToSvelteStyle(), appendSanitizedCssRule(), bakeParamValuesInCss(), buildInsertVariantStub(), buildPropContract(), buildPropsScript() (+32 more)

### Community 23 - "hook-before-edit.mjs"
Cohesion: 0.11
Nodes (40): allow(), bumpCursorDenial(), cursorBlockMessage(), deny(), detectProposedHtml(), done(), escapeRegExp(), findingSignature() (+32 more)

### Community 24 - "live-poll.mjs"
Cohesion: 0.11
Nodes (38): completionAckForAcceptResult(), completionTypeForAcceptResult(), PREVIEW_MODES_WITHOUT_SOURCE_MARKERS, acceptInstructions(), bootInstructions(), deferredWrapperInstructions(), generateInstructions(), insertScaffoldInstructions() (+30 more)

### Community 25 - "design-parser.mjs"
Cohesion: 0.13
Nodes (39): assessCoverage(), buildColor(), CANONICAL_SECTIONS, collectBullets(), collectColorValues(), collectParagraphs(), detectFormat(), extractColors() (+31 more)

### Community 26 - "Components"
Cohesion: 0.05
Nodes (39): Brass Seal Plate (signature), Buttons, Cards / Containers, Carried, and outside the system, Chips, Colors, Components, Design System: Shri Aradhyam (+31 more)

### Community 27 - "live-accept.mjs"
Cohesion: 0.12
Nodes (38): acceptCli(), acceptReceiptPath(), argVal(), buildAcceptedWrappedSource(), buildCarbonizeReplacement(), decodeHtmlAttr(), deindentContent(), detectCommentSyntax() (+30 more)

### Community 28 - "generate-image.mjs"
Cohesion: 0.08
Nodes (30): detectCsp(), INLINE_HEADER_SIGNALS, LAYOUT_EXTS, MONOREPO_HELPER_SIGNALS, NUXT_ROUTE_RULES_SIGNALS, NUXT_SECURITY_SIGNALS, SCAN_EXTS, SKIP_DIRS (+22 more)

### Community 29 - "devDependencies"
Cohesion: 0.05
Nodes (37): eslint, eslint-config-next, next, dependencies, next, react, react-dom, shadcn (+29 more)

### Community 30 - "parseAnyColor"
Cohesion: 0.11
Nodes (36): analyzeVisualContrastCandidate(), checkColors(), checkElementAIPaletteDOM(), checkElementColors(), checkElementColorsDOM(), checkElementGlow(), checkElementGlowDOM(), checkElementHoverContrast() (+28 more)

### Community 31 - "doctor.mjs"
Cohesion: 0.13
Nodes (32): applyFixes(), cli(), collect(), parseArgs(), readProjectRootPatterns(), rel(), renderText(), safeRead() (+24 more)

### Community 32 - "layout.md"
Cohesion: 0.07
Nodes (27): Adaptation Strategies, Assess Adaptation Challenge, Implement & Verify, Orientation & foldables, Phone → Tablet (iPad / large screens), Platform → platform (iOS ↔ Android), Web → native (porting a website or web app), Recommended Actions (+19 more)

### Community 33 - "site-data.ts"
Cohesion: 0.11
Nodes (25): metadata, revalidate, ThaliInvite(), DishCard(), CARD_SECTIONS, Filter, MenuBrowser(), SectionBody() (+17 more)

### Community 34 - "initGlobalBar"
Cohesion: 0.12
Nodes (33): agentHasWorkInFlight(), agentStatusText(), barPaletteForTheme(), brandMarkSvg(), buildDesignHeader(), cursorForInsertAxis(), designPanelCss(), detectPageTheme() (+25 more)

### Community 35 - "parseAnyColor"
Cohesion: 0.13
Nodes (32): checkBorders(), checkCreamPalette(), checkElementBorders(), checkElementBordersDOM(), checkElementColors(), checkElementColorsDOM(), checkElementHoverContrast(), checkElementIconTile() (+24 more)

### Community 36 - "runHook"
Cohesion: 0.12
Nodes (32): ALLOWED_EXTS, appendDesignSystemNote(), bumpEditCount(), coLocatedStylesheets(), dedupeAgainstCache(), depthIsSet(), designSystemOptions(), ensureFile() (+24 more)

### Community 37 - "live-copy-edit-agent.mjs"
Cohesion: 0.14
Nodes (31): applyMockWrites(), buildCopyEditBatchPrompt(), checkFrameworkSourceSyntax(), chooseCopyEditAgent(), COMMAND_AUTH_CACHE, commandAuthed(), commandExists(), compactBatchForPrompt() (+23 more)

### Community 38 - "live-inject.mjs"
Cohesion: 0.12
Nodes (30): describeInjectArtifacts(), frameworkIgnorePatterns(), resolveFramework(), appendOriginToDirective(), buildTagBlock(), commentClose(), commentOpen(), detectLineEnding() (+22 more)

### Community 39 - "injected/index.mjs"
Cohesion: 0.12
Nodes (27): browserColorsClose(), browserDesignSystemConfig(), browserFindingsFromMap(), browserHasDirectText(), browserPrimaryFont(), browserRadiusTokens(), browserSampleText(), checkBrowserDesignSystemSources() (+19 more)

### Community 40 - "impeccable-paths.mjs"
Cohesion: 0.12
Nodes (27): CRITIQUE_DIR, firstExisting(), getDesignSidecarCandidates(), getDesignSidecarPath(), getImpeccableDir(), getLegacyLiveConfigPath(), getLegacyLiveServerPath(), getLegacyLiveSessionsDir() (+19 more)

### Community 41 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 42 - "HEADING_TAGS"
Cohesion: 0.10
Nodes (28): checkElementHeroEyebrow(), checkElementHeroEyebrowDOM(), checkElementIconTile(), checkElementIconTileDOM(), checkElementQualityDOM(), checkHeroEyebrow(), checkIconTile(), checkKickerAboveHeading() (+20 more)

### Community 43 - "event-validation.mjs"
Cohesion: 0.13
Nodes (26): AGENT_PHASE_SET, FORBIDDEN_MANUAL_EDIT_TEXT_CHARS, INSERT_POSITIONS, isValidId(), isValidMountVariant(), isValidVariantId(), MOUNT_ERROR_MAX_LENGTH, MOUNT_URL_MAX_LENGTH (+18 more)

### Community 44 - "roots.mjs"
Cohesion: 0.16
Nodes (27): CANDIDATE_SCAN_IGNORED, consumeTargetArg(), CONTEXT_FALLBACK_DIRS, DESIGN_NAMES, DEV_CONFIG_MARKERS, discoverAppCandidates(), enterLiveRoot(), exists() (+19 more)

### Community 45 - "new-work.md"
Cohesion: 0.08
Nodes (21): Craft (deprecated alias), Impeccable Documenter, Input Contract, Output Contract, Workflow, Checks, in order, Disposition, Impeccable Finish Reviewer (+13 more)

### Community 46 - "staleness.mjs"
Cohesion: 0.16
Nodes (24): DESIGN_SIDECAR_SCHEMA_VERSION, PRODUCT_DEPRECATED_SECTIONS, PRODUCT_SCHEMA_VERSION, PRODUCT_V4_SECTIONS, productStampLine(), readProductSchemaVersion(), readSidecarSchemaVersion(), stampProductSchema() (+16 more)

### Community 47 - "insert-ui.mjs"
Cohesion: 0.09
Nodes (13): canCreateInsert(), clampPlaceholderSize(), computeInsertPosition(), groupSiblingRows(), hitSiblingInsertGap(), horizontalOverlap(), insertCreateDisabledReason(), insertLineCoords() (+5 more)

### Community 48 - "Responsive Design"
Cohesion: 0.08
Nodes (25): Assess Adaptation Challenge, Breakpoints: Content-Driven, Content Adaptation, Desktop Adaptation (Mobile → Desktop), Detect Input Method, Not Just Screen Size, Email Adaptation (Web → Email), Implement Adaptations, Layout Adaptation Patterns (+17 more)

### Community 49 - "scanCssTextForPulsingDot"
Cohesion: 0.14
Nodes (26): buildHtmlPatternCorpora(), checkHtmlPatterns(), collectCssCustomProps(), collectMarqueeKeyframes(), collectPulseKeyframes(), cssLengthToPx(), cssTextHasDarkRootBg(), extractShadowLengths() (+18 more)

### Community 50 - "handleManualEditActivity"
Cohesion: 0.17
Nodes (26): clearStoredManualApplyState(), fetchPendingCount(), handleManualEditActivity(), hidePendingApplyDock(), manualApplyLoadingText(), manualApplyStateKey(), manualEditEventForCurrentPage(), numberOrNull() (+18 more)

### Community 51 - "live-manual-edit-evidence.mjs"
Cohesion: 0.15
Nodes (25): analyzeSourceHint(), buildCandidatesForOp(), buildContextHintsByRef(), collectSearchFiles(), countOps(), decodeBasicHtml(), escapeRegExp(), findContextMatches() (+17 more)

### Community 52 - "layout.tsx"
Cohesion: 0.09
Nodes (19): alegreya, archivo, eczar, metadata, notoKannada, notoMalayalam, notoTamil, notoTelugu (+11 more)

### Community 53 - "collectVisualContrastCandidates"
Cohesion: 0.10
Nodes (25): addBrowserFindings(), addVisualContrastFindings(), addVisualContrastResult(), analyzeVisualContrast(), buildSelectorSegment(), clearOverlays(), collectVisualContrastCandidates(), collectVisualContrastReasons() (+17 more)

### Community 54 - "mountSvelteComponentVariant"
Cohesion: 0.12
Nodes (25): acceptedDomAlreadyClean(), applyOriginalAttrsToSvelteAnchor(), clearMountErrorCard(), commitAcceptedSvelteComponentToDom(), componentModuleCandidates(), describeMountFailure(), detectDevServerBase(), ensureAcceptedDomClean() (+17 more)

### Community 55 - "live.md"
Cohesion: 0.08
Nodes (22): Apply at system scale, Audit before choosing, Choose a strategy, Contrast and perception, Live-mode signature params, Verify, Visitor mode, Cleanup (+14 more)

### Community 56 - "collectBrowserFindings"
Cohesion: 0.13
Nodes (24): browserFindingsFromMap(), checkBorders(), checkCreamPalette(), checkEdgeFlushCardsDOM(), checkElementBlinkingCursorDOM(), checkElementBorders(), checkElementBordersDOM(), checkElementPseudoStripeDOM() (+16 more)

### Community 57 - "tanstack-adapter.mjs"
Cohesion: 0.15
Nodes (21): buildLiveScriptSrc(), tanstackStart, applyTanStackLiveAdapter(), buildTanStackLiveRootComponent(), detectTanStackStartProject(), escapeRegExp(), findRootRouteFile(), insertAfterLastImport() (+13 more)

### Community 58 - "svelte-ast.mjs"
Cohesion: 0.22
Nodes (20): Analysis, analyzeAttributes(), analyzeFragment(), analyzeNode(), analyzeSvelteMarkup(), applyReplacements(), classifyEachKey(), classifyRoots() (+12 more)

### Community 59 - "onboard.md"
Cohesion: 0.09
Nodes (22): Assess Onboarding Needs, Context Over Ceremony, Contextual Help, Design Onboarding Experiences, Documentation & Help, Empty State Design, Feature Discovery & Adoption, Guided Tours & Walkthroughs (+14 more)

### Community 60 - "live.mjs"
Cohesion: 0.15
Nodes (19): parseCliOptions(), resolveProjectRoot(), resolveTargetSelection(), getLegacyLiveAnnotationsDir(), parseTargetOptions(), parseTargetPath(), TargetArgError, __dirname (+11 more)

### Community 61 - "GENERIC_FONTS"
Cohesion: 0.12
Nodes (21): checkPageTypography(), checkTypography(), isBrandFontOnOwnDomain(), firstOverusedGoogleFont(), checkStaticPageTypography(), checkElementItalicSerif(), checkElementItalicSerifDOM(), checkItalicSerif() (+13 more)

### Community 62 - "franchise/page.tsx"
Cohesion: 0.10
Nodes (16): metadata, revalidate, CAPITAL_OPTIONS, EMPTY, EnquiryForm(), EXPERIENCE_OPTIONS, Fields, SITE_OPTIONS (+8 more)

### Community 63 - "[slug]/page.tsx"
Cohesion: 0.12
Nodes (14): generateMetadata(), OutletPage(), revalidate, LocationsPreview(), LocationFinder(), LANG, ScriptMorph(), CITY_LAUNCH (+6 more)

### Community 64 - "sveltekit-adapter.mjs"
Cohesion: 0.18
Nodes (20): applySvelteKitLiveAdapter(), buildSvelteLiveRootComponent(), defaultSvelteLayout(), detectSvelteKitProject(), ensureSvelteLiveRootComponent(), escapeRegExp(), fileIncludes(), findSvelteKitAppHtml() (+12 more)

### Community 65 - "The Toolkit"
Cohesion: 0.10
Nodes (20): Animate complex properties, Assess What "Extraordinary" Means Here, For data-heavy interfaces, For functional UI, For performance-critical UI, For visual/marketing surfaces, Implement with Discipline, Interact with the device (+12 more)

### Community 66 - "accept-css.mjs"
Cohesion: 0.24
Nodes (20): bakeParamValues(), collectAllSelectors(), collectSelectorsFromNodes(), escapeRegExp(), formatBody(), isToggleOn(), normalizeSelector(), normalizeToggleForVar() (+12 more)

### Community 67 - "manual-edit-routes.mjs"
Cohesion: 0.21
Nodes (17): args, cwd, pageUrlFilter, remaining, buildManualEditEvidence(), createManualEditRoutes(), sendJson(), summarizePendingManualEditBatch() (+9 more)

### Community 68 - "handleGo"
Cohesion: 0.15
Nodes (20): applyEditing(), buildInsertPlaceholderSnapshotFromDom(), buildLocatorForLeaf(), buildPickedAnchorSnapshot(), captureAndEmit(), checkpointPayload(), copyEditContainerContext(), copyEditLeafContext() (+12 more)

### Community 69 - "impeccable/SKILL.md"
Cohesion: 0.12
Nodes (14): Craft floor, Refuse, Verify, Constraints, Failure modes, Flow, $impeccable hooks, Intentional findings (+6 more)

### Community 70 - "onAnnotDown"
Cohesion: 0.18
Nodes (19): applyPlaceholderDimensions(), beginEditPin(), buildAnnotationsForCapture(), buildPinElement(), cancelEditingPin(), finalizeEditingPin(), initAnnotOverlay(), localCoords() (+11 more)

### Community 71 - "ornament.tsx"
Cohesion: 0.18
Nodes (13): metadata, FranchiseInvite(), Threshold(), HeaderShell(), EaveCourse(), ICONS, Kolam(), LotusRoundel() (+5 more)

### Community 72 - "checkQuality"
Cohesion: 0.14
Nodes (18): borderColorsFromStyle(), borderWidthsFromStyle(), checkElementGptBorderShadow(), checkElementGptBorderShadowDOM(), checkGptThinBorderWideShadow(), checkQuality(), colorsNearlyMatch(), cssColorAlpha() (+10 more)

### Community 73 - "detect-utils.mjs"
Cohesion: 0.25
Nodes (14): astro, detectAstroProject(), fileExists(), findConfigFile(), firstExistingFile(), hasAnyDependency(), literalConfigFiles(), readPackageDeps() (+6 more)

### Community 74 - "app/page.tsx"
Cohesion: 0.15
Nodes (13): revalidate, Assurances(), CityLaunch(), dishesFrom(), FourStates(), PLACEMENT, MenuPreview(), PLATES (+5 more)

### Community 75 - "resolveLiveInjectionAnchor"
Cohesion: 0.18
Nodes (17): buildSvelteExpressionTextMap(), buildSveltePropValuesFromLiveElement(), buildSveltePropValuesV2(), cloneWithoutElements(), collectTextNodes(), collectVisibleTexts(), cssEscapeIdent(), elementMatchesOriginalMarkup() (+9 more)

### Community 76 - "animate.md"
Cohesion: 0.12
Nodes (14): Accessibility and control, Choose material by meaning, Find the job, Implement to the runtime, Set the motion thesis, Timing and easing, Verify, Visitor mode (+6 more)

### Community 77 - "Handle `generate`"
Cohesion: 0.12
Nodes (16): 1. Read the screenshot (if present), 2. Wrap the element, 3. Load the action's reference, 4. Plan three variants: identity first, then mode, then axes, 5. Apply the freeform prompt (if present), 6. Deliver variants, 7. Parameters (composition-sized, 0-4 per variant), 8. Signal done (+8 more)

### Community 78 - "context-signals.mjs"
Cohesion: 0.23
Nodes (14): extractPlatform(), loadContext(), cli(), COMMON_DEV_PORTS, devServerSignals(), gatherSignals(), gitSignals(), hasCode() (+6 more)

### Community 79 - "sampleCssBackground"
Cohesion: 0.18
Nodes (16): blendRgba(), clampByte(), firstCssUrl(), getLayerValue(), loadVisualContrastImage(), parseObjectPosition(), parsePositionPair(), parsePositionToken() (+8 more)

### Community 80 - "session-store.mjs"
Cohesion: 0.20
Nodes (12): safeSessionId(), applyEvent(), baseSnapshot(), COMPLETED_PHASES, deriveRenderState(), GENERATION_FENCED_PHASES, getJournalPath(), getSnapshotPath() (+4 more)

### Community 81 - "inlineSvelteComponentAccept"
Cohesion: 0.17
Nodes (16): collectUnusedSelectors(), verifyAcceptedSource(), indentCssBlock(), inlineSvelteComponentAccept(), inlineSvelteComponentInsertAccept(), matchOpeningTag(), mergeCssIntoSvelteSource(), mergeOriginalTopLevelAttrs() (+8 more)

### Community 82 - "serve-question.mjs"
Cohesion: 0.13
Nodes (8): esc(), localImages, page(), payloadPath, portArg, QUESTION_DIR, server, timeoutSec

### Community 83 - "components.json"
Cohesion: 0.12
Nodes (15): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+7 more)

### Community 84 - "story/page.tsx"
Cohesion: 0.15
Nodes (10): metadata, revalidate, metadata, PACKAGING, revalidate, Roadmap(), AssuranceIcon(), ASSURANCES (+2 more)

### Community 85 - "tasteskill: Anti-Slop Frontend Skill"
Cohesion: 0.13
Nodes (15): 0.A Read these signals first, 0.B Output a one-line "Design Read" before generating, 0. BRIEF INFERENCE (Read the Room Before Anything Else), 0.C If the brief is ambiguous, ask one question, do not guess, 0.D Anti-Default Discipline, 13. OUT OF SCOPE, 14. FINAL PRE-FLIGHT CHECK, 1.A Dial Inference (design read → dial values) (+7 more)

### Community 86 - "Appendix B - Canonical Sources (read these before reinventing)"
Cohesion: 0.13
Nodes (15): Appendix B - Canonical Sources (read these before reinventing), Apple Liquid Glass (Apple platforms only), Atlassian, Bootstrap, Carbon, Fluent UI, GOV.UK, Material Web (+7 more)

### Community 87 - "Generate Report"
Cohesion: 0.13
Nodes (14): 1. Accessibility (A11y), 2. Performance, 3. Theming, 4. Responsive Design, 5. Implementation Integrity (CRITICAL), Audit Health Score, Detailed Findings by Severity, Diagnostic Scan (+6 more)

### Community 88 - "critique-storage.mjs"
Cohesion: 0.29
Nodes (12): coerceSlug(), listSnapshotsForSlug(), main(), nowFilenameStamp(), parseFrontmatter(), readLatestSnapshot(), readTrend(), serializeFrontmatter() (+4 more)

### Community 89 - "live-status.mjs"
Cohesion: 0.30
Nodes (13): collectManualApplyFiles(), manualApplyReplyCommand(), manualApplyResumeHint(), mountFailureAction(), parseArgs(), renderSummary(), resumeCli(), summarizeManualApplyEvent() (+5 more)

### Community 90 - "Impeccable Asset Producer"
Cohesion: 0.14
Nodes (12): Core Rule, Decision Sketches, Impeccable Asset Producer, Input Contract, Output Contract, Prompt Pattern, Workflow, Generate three compositional options (+4 more)

### Community 91 - "optimize.md"
Cohesion: 0.14
Nodes (13): Animation Performance, Assess Performance Issues, Core Web Vitals Optimization, Cumulative Layout Shift (CLS < 0.1), Interaction to Next Paint (INP < 200ms), Largest Contentful Paint (LCP < 2.5s), Loading Performance, Network Optimization (+5 more)

### Community 93 - "journal.mjs"
Cohesion: 0.30
Nodes (13): clearInjectJournal(), healArtifact(), healInjectJournal(), INJECT_JOURNAL_RELPATH, INJECT_JOURNAL_VERSION, injectJournalPath(), insideProject(), normalizeRel() (+5 more)

### Community 94 - "Scan mode (approach C: auto-extract, then confirm descriptive language)"
Cohesion: 0.15
Nodes (13): Component translation rules, Narrative mapping, Scan mode (approach C: auto-extract, then confirm descriptive language), Schema, Step 1: Find the design assets, Step 2: Auto-extract what can be auto-extracted, Step 2b: Stage the frontmatter, Step 3: Ask the user for qualitative language (+5 more)

### Community 95 - "sampleCssBackground"
Cohesion: 0.23
Nodes (13): analyzeVisualContrastCandidate(), blendRgba(), clampByte(), firstCssUrl(), getLayerValue(), loadVisualContrastImage(), pickWorstContrastColor(), pointToImageSource() (+5 more)

### Community 96 - "collectVisualContrastCandidates"
Cohesion: 0.18
Nodes (13): buildSelectorSegment(), collectVisualContrastCandidates(), collectVisualContrastReasons(), generateSelector(), getDirectText(), getDirectTextRect(), isLikelyHashedClass(), tailwind (+5 more)

### Community 97 - "surface-briefs.mjs"
Cohesion: 0.38
Nodes (10): getSurfaceBriefDir(), listSurfaceBriefs(), normalizeSurfaceTarget(), parseSurfaceBrief(), resolveSurfaceBrief(), SURFACE_BRIEF_VERSION, surfaceBriefPathForTarget(), writeSurfaceBrief() (+2 more)

### Community 98 - "pin.mjs"
Cohesion: 0.23
Nodes (11): CODEX_HARNESSES, commandPrefixForSkillsDir(), __dirname, findHarnessDirs(), generatePinnedSkill(), HARNESS_DIRS, loadCommandMetadata(), pin() (+3 more)

### Community 99 - "Product"
Cohesion: 0.15
Nodes (12): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+4 more)

### Community 100 - "4. DESIGN ENGINEERING DIRECTIVES (Bias Correction)"
Cohesion: 0.17
Nodes (12): 4.10 Quotes & Testimonials, 4.11 Page Theme Lock (Light / Dark Mode Consistency), 4.1 Typography, 4.2 Color Calibration, 4.3 Layout Diversification, 4.4 Materiality, Shadows, Cards, 4.5 Interactive UI States, 4.6 Data & Form Patterns (+4 more)

### Community 101 - "Simplify the Design"
Cohesion: 0.17
Nodes (11): Assess Current State, Code Simplification, Content Simplification, Document Removed Complexity, Information Architecture, Interaction Simplification, Layout Simplification, Plan Simplification (+3 more)

### Community 102 - "Hardening Dimensions"
Cohesion: 0.17
Nodes (11): Accessibility Resilience, Assess Hardening Needs, Edge Cases & Boundary Conditions, Error Handling, Hardening Dimensions, Input Validation & Sanitization, Internationalization (i18n), Performance Resilience (+3 more)

### Community 103 - "scheduleLazyVisualContrast"
Cohesion: 0.21
Nodes (12): addBrowserFindings(), addVisualContrastFindings(), addVisualContrastResult(), analyzeVisualContrast(), clearOverlays(), detachOverlay(), disconnectLazyVisualContrastObserver(), rememberVisualContrastAnalysis() (+4 more)

### Community 104 - "ui-core.mjs"
Cohesion: 0.23
Nodes (10): createLiveBrowserDomHelpers(), activeElementDeep(), appendStyleToLiveUiRoot(), appendToLiveUiRoot(), escapeCssIdent(), getLiveUiElementById(), LIVE_CHROME_MOUNT_CONTRACT, LIVE_UI_COMPONENT_IDS (+2 more)

### Community 105 - "frameworks/index.mjs"
Cohesion: 0.18
Nodes (10): COMMENT_SYNTAXES, FRAMEWORKS, INJECT_KINDS, PATCH_UNDOERS, PREVIEW_MODES, SOURCE_TRAIT_DEFAULTS, STYLE_MODES, TAG_PATCH_KIND (+2 more)

### Community 106 - "What to replace with real material"
Cohesion: 0.17
Nodes (11): 1. Menu prices, and a conflict between your two sources, 2. Kerala has no dish on the board, 3. Outlet details, 4. Photography, 5. Franchise commercials, 6. The enquiry form has no backend, 7. Which City Launch is live, 8. Still missing, and deliberately never claimed (+3 more)

### Community 107 - "clarify.md"
Cohesion: 0.18
Nodes (10): Actions and navigation, Audit the language, Errors and permissions, Forms, Help and instructional text, Loading, empty, and success states, Rewrite by function, Set the message hierarchy (+2 more)

### Community 108 - "critique.md"
Cohesion: 0.18
Nodes (10): Action Summary, Ask the User, Assessment A: Design Review, Assessment B: Detector + Browser Evidence, Assessment Orchestration, Hard Invariants, Persist the Snapshot, Purpose (+2 more)

### Community 109 - "Nielsen's 10 Heuristics"
Cohesion: 0.18
Nodes (11): 10. Help and Documentation, 1. Visibility of System Status, 2. Match Between System and Real World, 3. User Control and Freedom, 4. Consistency and Standards, 5. Error Prevention, 6. Recognition Rather Than Recall, 7. Flexibility and Efficiency of Use (+3 more)

### Community 110 - "Generate Combined Critique Report"
Cohesion: 0.18
Nodes (11): Design Health Score, Design Specificity Verdict, Generate Combined Critique Report, Minor Observations, Overall Impression, Persona Red Flags, Priority Issues, Questions to Consider (+3 more)

### Community 111 - "New visual work"
Cohesion: 0.18
Nodes (11): 1. Decide what is already true, 2. Ask what will change the work, 3. Choose the right amount of invention, 4. Commit the world, 5. Record the decision, 6. Build with full commitment, 7. Inspect and finish, Create a whole surface inside an established world (+3 more)

### Community 112 - "polish.md"
Cohesion: 0.18
Nodes (10): 1. Establish the system, 2. Gather the evidence, 3. Triage, 4. Polish the whole path, 5. Verify and finish, Color, imagery, and icons, Content and code, Flow and hierarchy (+2 more)

### Community 113 - "quieter.md"
Cohesion: 0.18
Nodes (10): Assess Current State, Color Refinement, Composition Refinement, Motion Reduction, Plan Refinement, Refine the Design, Simplification, Verify Quality (+2 more)

### Community 114 - "checkTextOcclusionDOM"
Cohesion: 0.22
Nodes (11): checkTextOcclusionDOM(), clippedByInset(), clippedByRect(), elementDirectText(), expandBoxShorthand(), firstMetricLengthPx(), isLayeredElement(), isOpaqueDecoratedBox() (+3 more)

### Community 115 - "generation-preflight.mjs"
Cohesion: 0.35
Nodes (9): buildGenerationPreflight(), compactError(), execFileAsync, insertTarget(), normalizeTarget(), replaceTarget(), runGenerationPreflight(), sourceResolutionCache (+1 more)

### Community 116 - "palette.mjs"
Cohesion: 0.24
Nodes (7): args, buildWeights(), hashUnit(), pickSeed(), seed, SEEDS, weightedPick()

### Community 117 - "10. REFERENCE VOCABULARY (Pattern Names the Agent Should Know)"
Cohesion: 0.20
Nodes (10): 10. REFERENCE VOCABULARY (Pattern Names the Agent Should Know), Animation Library Choice, Cards & Containers, Galleries & Media, Hero Paradigms, Layout & Grids, Micro-Interactions & Effects, Navigation & Menus (+2 more)

### Community 118 - "Init flow"
Cohesion: 0.20
Nodes (10): Completion gate, Init flow, Step 1: Load current state, Step 2: Explore the project, Step 3: Interview for product truth, Step 4: Write PRODUCT.md, Step 5: Configure live mode when useful, Step 6: Wrap up or resume (+2 more)

### Community 119 - "staleness-notice.mjs"
Cohesion: 0.38
Nodes (9): appendStalenessDirective(), buildStalenessDirective(), cachePath(), filterFreshFindings(), pruneCache(), readCache(), readJson(), stalenessCheckDisabled() (+1 more)

### Community 120 - "inline-ignores.mjs"
Cohesion: 0.40
Nodes (9): addRules(), applyInlineIgnores(), getSet(), hasDirectives(), isInlineIgnored(), normalizeRule(), parseInlineIgnores(), parseRuleList() (+1 more)

### Community 121 - "OPENING"
Cohesion: 0.44
Nodes (6): Hero(), SiteHeader(), OPENING, daysUntilOpening(), isPreOpening(), istMidnight()

### Community 122 - "Common Cognitive Load Violations"
Cohesion: 0.22
Nodes (9): 1. The Wall of Options, 2. The Memory Bridge, 3. The Hidden Navigation, 4. The Jargon Barrier, 5. The Visual Noise Floor, 6. The Inconsistent Pattern, 7. The Multi-Task Demand, 8. The Context Switch (+1 more)

### Community 123 - "Operate mode depth (and Read notes)"
Cohesion: 0.22
Nodes (9): Color, Components, Layout, Motion, Operate mode depth (and Read notes), Product constraints, Product permissions, The product slop test (+1 more)

### Community 124 - "Shape"
Cohesion: 0.22
Nodes (8): Cadence, Confirm and stop, Phase 1: Discovery interview, Phase 2: Resolve the design direction, Phase 3: Write the brief, Round 1: purpose, people, and outcome, Round 2: material, behavior, and boundaries, Shape

### Community 125 - "SAFE_TAGS"
Cohesion: 0.28
Nodes (9): checkElementMotion(), checkElementMotionDOM(), checkLayout(), checkMotion(), checkPageLayout(), isCardLike(), isCardLikeDOM(), isCardLikeFromProps() (+1 more)

### Community 126 - "9. AI TELLS (Forbidden Patterns)"
Cohesion: 0.25
Nodes (8): 9.A Visual & CSS, 9. AI TELLS (Forbidden Patterns), 9.B Typography, 9.C Layout & Spacing, 9.D Content & Data ("Jane Doe" Effect), 9.E External Resources & Components, 9.F Production-Test Tells (banned outright), 9.G EM-DASH BAN (the single most-violated Tell)

### Community 127 - "Persona-Based Design Testing"
Cohesion: 0.25
Nodes (8): 1. Impatient Power User: "Alex", 2. Confused First-Timer: "Jordan", 3. Accessibility-Dependent User: "Sam", 4. Deliberate Stress Tester: "Riley", 5. Distracted Mobile User: "Casey", Persona-Based Design Testing, Project-Specific Personas, Selecting Personas

### Community 128 - "Extract Flow"
Cohesion: 0.25
Nodes (7): Extract Flow, Step 1: Discover the Design System, Step 2: Identify Patterns, Step 3: Plan Extraction, Step 4: Extract & Enrich, Step 5: Migrate, Step 6: Document

### Community 129 - "iOS platform"
Cohesion: 0.25
Nodes (8): Color & materials, Components & controls, iOS platform, Layout & structure, Motion, The iOS slop test, Touch targets, Typography

### Community 130 - "live-setup.md"
Cohesion: 0.25
Nodes (7): append-arrays, append-string, Config drift, Consent prompt (use this phrasing), CSP detection (first-time only), Troubleshooting, Write the config

### Community 131 - "source-lock.mjs"
Cohesion: 0.50
Nodes (7): isLiveServerPidReachable(), clearStaleLock(), readLock(), releaseOwnLock(), sleepSync(), sourceLockPath(), withSourceLockSync()

### Community 132 - "template-extensions.mjs"
Cohesion: 0.36
Nodes (6): extensionCache, LIVE_TEMPLATE_EXTENSIONS, mergeExtensions(), normalizeExtensionEntries(), readLiveTemplateExtensions(), safeReadJson()

### Community 133 - "APPENDICES - Real Source-Backed Reference Material"
Cohesion: 0.29
Nodes (6): APPENDICES - Real Source-Backed Reference Material, Appendix A - Install Commands per Design System, Appendix C - Apple Liquid Glass: Honest Web Approximation, Safer web approximation skeleton, What is NOT official, What is official

### Community 134 - "11. REDESIGN PROTOCOL"
Cohesion: 0.29
Nodes (7): 11.A Detect the Mode (first action), 11.B Audit Before Touching, 11.C Preservation Rules, 11.D Modernisation Levers (priority order), 11.E Decision Tree: Targeted Evolution vs Full Redesign, 11.F What Never Changes Silently, 11. REDESIGN PROTOCOL

### Community 135 - "3. DEFAULT ARCHITECTURE & CONVENTIONS"
Cohesion: 0.29
Nodes (7): 3.A Stack, 3.B State, 3.C Icons, 3.D Emoji Policy, 3. DEFAULT ARCHITECTURE & CONVENTIONS, 3.E Responsiveness & Layout Mechanics, 3.F Dependency Verification (mandatory)

### Community 136 - "6. PERFORMANCE & ACCESSIBILITY GUARDRAILS"
Cohesion: 0.29
Nodes (7): 6.A Hardware Acceleration, 6.B Reduced Motion (mandatory), 6.C Dark Mode (mandatory for any consumer-facing page), 6.D Core Web Vitals Targets, 6.E DOM Cost, 6.F Z-Index Restraint, 6. PERFORMANCE & ACCESSIBILITY GUARDRAILS

### Community 137 - "Android platform"
Cohesion: 0.29
Nodes (7): Android platform, Color & theming, Components & motion, Layout & structure, The Android slop test, Touch targets, Typography

### Community 138 - "Generate Report"
Cohesion: 0.29
Nodes (7): Audit Health Score, Detailed Findings by Severity, Executive Summary, Generate Report, Patterns & Systemic Issues, Platform Conformance Verdict, Positive Findings

### Community 139 - "Cognitive Load Assessment"
Cohesion: 0.29
Nodes (7): Cognitive Load Assessment, Cognitive Load Checklist, Extraneous Load: Bad Design, Germane Load: Learning Effort, Intrinsic Load: The Task Itself, The Working Memory Rule, Three Types of Cognitive Load

### Community 140 - "Impeccable Manual Edit Applier"
Cohesion: 0.29
Nodes (6): Checks, Entry Atomicity, Impeccable Manual Edit Applier, Input Contract, Output Contract, Workflow

### Community 141 - "nuxt.mjs"
Cohesion: 0.33
Nodes (6): applyNuxtLiveAdapter(), buildNuxtPlugin(), nuxt, NUXT_PLUGIN_MARKER, NUXT_PLUGIN_NAME, removeNuxtLiveAdapter()

### Community 142 - "Diagnostic Scan"
Cohesion: 0.33
Nodes (6): 1. Accessibility (VoiceOver / TalkBack), 2. Performance, 3. Appearance & Theming, 4. Platform Conformance (CRITICAL), 5. Adaptivity, Diagnostic Scan

### Community 143 - "bolder.md"
Cohesion: 0.33
Nodes (5): Before you finish, Scope is sovereign, The amplification, The skeleton test, Why it reads flat

### Community 144 - "normalizeGitHubEvent"
Cohesion: 0.47
Nodes (6): applyPatchText(), envProjectDir(), looksLikeApplyPatch(), normalizeGitHubEvent(), normalizeHookEvent(), parseGitHubToolArgs()

### Community 145 - "source-search.mjs"
Cohesion: 0.40
Nodes (5): IMPECCABLE_DIR, matchesTemplateExtension(), NEVER_SOURCE_DIRS, SOURCE_SEARCH_DIRS, walk()

### Community 146 - "12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)"
Cohesion: 0.40
Nodes (5): 12.A File Location, 12.B Required Frontmatter, 12.C Required Body Sections, 12.D Block-Library Discipline, 12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)

### Community 147 - "5. CONTEXT-AWARE PROACTIVITY"
Cohesion: 0.40
Nodes (5): 5.A Sticky-Stack - Canonical Skeleton, 5.B Horizontal-Pan - Canonical Skeleton, 5.C Scroll-Reveal Stagger - Canonical Skeleton (lighter alternative), 5. CONTEXT-AWARE PROACTIVITY, 5.D Forbidden Animation Patterns

### Community 148 - "8. DARK MODE PROTOCOL"
Cohesion: 0.40
Nodes (5): 8.A Token Strategy (pick one, stick to it), 8.B Do Not Prescribe Specific Colors Here, 8.C Default Mode, 8.D Test in Both Modes Before Finishing, 8. DARK MODE PROTOCOL

### Community 149 - "resolveObjectImageRect"
Cohesion: 0.50
Nodes (5): parseObjectPosition(), parsePositionPair(), parsePositionToken(), resolveObjectImageRect(), resolvePaintedImageRect()

### Community 150 - "readConfig"
Cohesion: 0.40
Nodes (5): cloneDefaultConfig(), detectorSection(), hookSection(), readConfig(), safeReadJson()

### Community 151 - "applyDeferredSvelteComponentAccepts"
Cohesion: 0.60
Nodes (5): applyLegacyDeferredAcceptsOnStartup(), applyDeferredSvelteComponentAccepts(), deferredAcceptsPath(), readDeferredAccepts(), writeDeferredAccept()

### Community 152 - "7. DIAL DEFINITIONS (Technical Reference)"
Cohesion: 0.50
Nodes (4): 7. DIAL DEFINITIONS (Technical Reference), DESIGN_VARIANCE (Level 1-10), MOTION_INTENSITY (Level 1-10), VISUAL_DENSITY (Level 1-10)

### Community 153 - "Heuristics Scoring Guide"
Cohesion: 0.50
Nodes (4): Heuristics Scoring Guide, Issue Severity (P0–P3), Reference Material, Score Summary

### Community 154 - "detect.mjs"
Cohesion: 0.50
Nodes (3): candidates, detectorPath, __dirname

### Community 155 - "serializeFindings"
Cohesion: 0.67
Nodes (4): postSerializedFindings(), renderBrowserFindings(), scanResultMeta(), serializeFindings()

### Community 156 - "checkElementRadialSpotlightDOM"
Cohesion: 0.67
Nodes (4): checkElementRadialSpotlight(), checkElementRadialSpotlightDOM(), elementGradientValue(), spotlightLabel()

### Community 157 - "hook.mjs"
Cohesion: 0.83
Nodes (3): isStopEvent(), main(), readStdin()

### Community 158 - "provider.mjs"
Cohesion: 0.50
Nodes (3): IMPECCABLE_COMMAND, IMPECCABLE_COMMAND_PREFIX, IMPECCABLE_PROVIDER_ID

### Community 159 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **803 isolated node(s):** `here`, `API_BASE`, `API_TIMEOUT_MS`, `localStates`, `SEED_MODES` (+798 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `el()` connect `el` to `collectVisualContrastCandidates`, `checks.mjs`, `live-browser.js`, `connectSSE`, `design-system.mjs`, `initGlobalBar`, `detect-text.mjs`, `setLiveState`, `detect-antipatterns-browser.js`, `initPageChat`, `css-cascade.mjs`, `GENERIC_FONTS`, `collectVisualContrastCandidates`, `mountSvelteComponentVariant`, `collectBrowserFindings`, `svelte-ast.mjs`, `serializeFindings`, `SAFE_TAGS`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Why does `ACTIONS` connect `hook-admin.mjs` to `el`, `initGlobalBar`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Why does `collectPatternNames()` connect `svelte-ast.mjs` to `el`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Are the 23 inferred relationships involving `el()` (e.g. with `collectVisualContrastCandidates()` and `renderBrowserFindings()`) actually correct?**
  _`el()` has 23 INFERRED edges - model-reasoned connections that need verification._
- **What connects `here`, `API_BASE`, `API_TIMEOUT_MS` to the rest of the system?**
  _803 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `live-browser.js` be split into smaller, more focused modules?**
  _Cohesion score 0.026751481352387592 - nodes in this community are weakly interconnected._
- **Should `checks.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.038585858585858585 - nodes in this community are weakly interconnected._