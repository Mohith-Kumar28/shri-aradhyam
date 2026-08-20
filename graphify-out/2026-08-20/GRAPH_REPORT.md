# Graph Report - shri-aradhyam  (2026-08-20)

## Corpus Check
- 188 files · ~503,339 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 3673 nodes · 8639 edges · 167 communities (162 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 118 edges (avg confidence: 0.66)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cab10139`
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
- discoverTargetCandidates
- live-wrap.mjs
- manual-apply.mjs
- hook-admin.mjs
- svelte-component.mjs
- hook-before-edit.mjs
- roots.mjs
- design-parser.mjs
- Components
- live-accept.mjs
- generate-image.mjs
- devDependencies
- site-data.ts
- doctor.mjs
- android.md
- partner/page.tsx
- initGlobalBar
- parseRgb
- runHook
- live-copy-edit-agent.mjs
- layout.tsx
- injected/index.mjs
- impeccable-paths.mjs
- compilerOptions
- resolveLengthPx
- event-validation.mjs
- app/page.tsx
- new-work.md
- staleness.mjs
- insert-ui.mjs
- Responsive Design
- parseAnyColor
- handleManualEditActivity
- live-manual-edit-evidence.mjs
- ornament.tsx
- scheduleLazyVisualContrast
- parseRgb
- live.md
- collectBrowserFindings
- tanstack-adapter.mjs
- svelte-ast.mjs
- onboard.md
- collectNumberedSectionLabelCandidates
- source-search.mjs
- scheduleLazyVisualContrast
- StaticElement
- sveltekit-adapter.mjs
- The Toolkit
- accept-css.mjs
- manual-edit-routes.mjs
- handleGo
- impeccable/SKILL.md
- onAnnotDown
- sampleCssBackground
- checkQuality
- detect-utils.mjs
- checkElementGptBorderShadowDOM
- resolveLiveInjectionAnchor
- animate.md
- Handle `generate`
- context-signals.mjs
- sampleCssBackground
- session-store.mjs
- inlineSvelteComponentAccept
- serve-question.mjs
- components.json
- GENERIC_FONTS
- tasteskill: Anti-Slop Frontend Skill
- Appendix B - Canonical Sources (read these before reinventing)
- Generate Report
- live-complete.mjs
- live-status.mjs
- Impeccable Asset Producer
- optimize.md
- collectVisualContrastCandidates
- journal.mjs
- Scan mode (approach C: auto-extract, then confirm descriptive language)
- live-inject.mjs
- nuxt.mjs
- critique-storage.mjs
- pin.mjs
- Product
- 4. DESIGN ENGINEERING DIRECTIVES (Bias Correction)
- Simplify the Design
- Hardening Dimensions
- target-args.mjs
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
- resolveProject
- resolveObjectImageRect
- Common Cognitive Load Violations
- Operate mode depth (and Read notes)
- Shape
- isCardLike
- 9. AI TELLS (Forbidden Patterns)
- Persona-Based Design Testing
- Extract Flow
- doctor.md
- live-setup.md
- source-lock.mjs
- inline-ignores.mjs
- APPENDICES - Real Source-Backed Reference Material
- 11. REDESIGN PROTOCOL
- 3. DEFAULT ARCHITECTURE & CONVENTIONS
- 6. PERFORMANCE & ACCESSIBILITY GUARDRAILS
- checkRadialSpotlight
- isGeneratedFile
- Cognitive Load Assessment
- Impeccable Manual Edit Applier
- applyDeferredSvelteComponentAccepts
- Impeccable Finish Reviewer
- serializeFindings
- layout.md
- template-extensions.mjs
- 12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)
- 5. CONTEXT-AWARE PROACTIVITY
- 8. DARK MODE PROTOCOL
- BORDER_SAFE_TAGS
- browser-script-parts.mjs
- colorize.md
- 7. DIAL DEFINITIONS (Technical Reference)
- Heuristics Scoring Guide
- detect.mjs
- normalizeGitHubEvent
- 1. THE THREE DIALS (Core Configuration)
- hook.mjs
- provider.mjs
- README.md
- readConfig
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

## Communities (167 total, 5 thin omitted)

### Community 0 - "live-browser.js"
Cohesion: 0.03
Nodes (140): addManualContextText(), applyGlobalBarLabelState(), applyPlaceholderSizingStyles(), averageRgb01(), bindEditBadgeProxy(), bufferToBase64(), buildCollapsible(), buildColorModels() (+132 more)

### Community 1 - "checks.mjs"
Cohesion: 0.03
Nodes (135): ANIMATION_VALUE_KEYWORDS, borderColorsFromStyle(), borderWidthsFromStyle(), buildHtmlPatternCorpora(), checkClippedOverflow(), checkCreamPalette(), checkEdgeFlushCardsDOM(), checkElementBlinkingCursorDOM() (+127 more)

### Community 2 - "context.mjs"
Cohesion: 0.07
Nodes (53): appendAutonomyCounterDirective(), appendDetectorFallback(), appendImageGenDirective(), appendImageToolsDirective(), appendSubagentAuthorizationDirective(), appendSurfaceBriefContext(), automaticHookMode(), buildMissingTargetDirective() (+45 more)

### Community 3 - "connectSSE"
Cohesion: 0.06
Nodes (74): applyParamDefaults(), applyParamValue(), applySavedSessionMeta(), buildParamsPanel(), clampVariantIndex(), clearHandled(), clearSession(), closedClipPath() (+66 more)

### Community 4 - "design-system.mjs"
Cohesion: 0.07
Nodes (66): addClampEndpoints(), addColorObject(), addDesignColor(), addFontSizeStep(), addRoundedScale(), addRoundedToken(), addSidecarColors(), addSidecarRadii() (+58 more)

### Community 5 - "live-server.mjs"
Cohesion: 0.07
Nodes (58): eventPriority(), selectAvailablePendingEvent(), acknowledgePendingEvent(), activeSessionSummaries(), agentPollingConnected(), annotRoot, args, broadcast() (+50 more)

### Community 6 - "detect-text.mjs"
Cohesion: 0.07
Nodes (54): blankCssComments(), BLOCK_BRACE_PREFIX_KEYWORDS, CSS_IN_JS_EXTENSIONS, detectText(), extFromFilePath(), extractCSSinJS(), extractStyleBlocks(), findCSSinJSTemplates() (+46 more)

### Community 7 - "hook-lib.mjs"
Cohesion: 0.07
Nodes (57): ADVISORY_RULES, applyConfigSource(), applyDetectorConfigSource(), canonicalPath(), canonicalPathCache, clampByte(), clampGroupedToBudget(), clampToBudget() (+49 more)

### Community 8 - "setLiveState"
Cohesion: 0.11
Nodes (57): abandonForeignSession(), abortSvelteComponentInjection(), cancelEditing(), cancelEditingToPicking(), cancelInsertConfigure(), cleanup(), cleanupAcceptedSession(), clearAnnotations() (+49 more)

### Community 9 - "detect-antipatterns.mjs"
Cohesion: 0.09
Nodes (47): confirm(), detectCli(), dim(), fileUrlToLocalPath(), formatAdvisorySection(), formatFindings(), formatFindingsBody(), formatFindingSummary() (+39 more)

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
Nodes (49): browserColorsClose(), browserDesignSystemConfig(), browserHasDirectText(), browserPrimaryFont(), browserRadiusTokens(), browserSampleText(), buildSelectorSegment(), checkBrowserDesignSystemSources() (+41 more)

### Community 14 - "initPageChat"
Cohesion: 0.08
Nodes (54): armPageChatForTyping(), attachSteerFocusDebug(), attachSteerFocusGuard(), buildSteerProcessingDots(), buildSteerQueueHint(), clearSteerAwaitTimer(), clearSteerFocusRecoverTimer(), collapsePageChat() (+46 more)

### Community 15 - "live-commit-manual-edits.mjs"
Cohesion: 0.10
Nodes (50): allEntryIds(), argVal(), buildRepairBatch(), candidatesForEntry(), changedFilesSinceSnapshot(), clearAppliedEntries(), collectApplyOwnedFiles(), collectRollbackFiles() (+42 more)

### Community 16 - "css-cascade.mjs"
Cohesion: 0.08
Nodes (32): applyStaticDeclaration(), buildBorderOverrideMap(), buildStaticStyleMap(), buildStaticWindow(), collectStaticCssRules(), compareStaticPriority(), cssPropToCamel(), expandStaticBoxValues() (+24 more)

### Community 17 - "impeccable-config.mjs"
Cohesion: 0.10
Nodes (47): applyDetectionConfigSource(), clampByte(), cleanIgnoreValueDisplay(), cloneDetectionConfig(), cloneRawDetectionConfig(), colorIgnoreKey(), DEFAULT_DETECTION_CONFIG, DETECTOR_CONFIG_KEYS (+39 more)

### Community 18 - "discoverTargetCandidates"
Cohesion: 0.13
Nodes (22): directChildDirs(), discoverRootsForPattern(), discoverTargetCandidates(), expandSimplePattern(), findTargetExample(), hasVisualImplementation(), isCandidateProjectRoot(), isExcludedByWorkspacePattern() (+14 more)

### Community 19 - "live-wrap.mjs"
Cohesion: 0.14
Nodes (34): resolveSourceTraits(), argVal(), buildInsertWrapperLines(), computeInsertLine(), INSERT_POSITIONS, insertCli(), isInsertPosition(), resolveElementMatch() (+26 more)

### Community 20 - "manual-apply.mjs"
Cohesion: 0.10
Nodes (36): addOpToManualApplyChunk(), APPLY_EVENT_HARD_TIMEOUT_MS, APPLY_EVENT_SOFT_DEADLINE_MS, buildManualApplyAgentAction(), clearManualApplyTransaction(), collectManualApplyFiles(), compactManualApplyBatch(), compactManualApplyCandidates() (+28 more)

### Community 21 - "hook-admin.mjs"
Cohesion: 0.12
Nodes (42): ACTIONS, addIgnoreFile(), addIgnoreRule(), addIgnoreValue(), DETECTOR_CONFIG_KEYS, detectorSection(), fileHasImpeccableHookMarker(), HOOK_MANIFEST_TARGETS (+34 more)

### Community 22 - "svelte-component.mjs"
Cohesion: 0.08
Nodes (40): buildPropsScriptV2(), loadSvelteCompiler(), appendCssToSvelteStyle(), appendSanitizedCssRule(), bakeParamValuesInCss(), buildInsertVariantStub(), buildPropContract(), buildPropsScript() (+32 more)

### Community 23 - "hook-before-edit.mjs"
Cohesion: 0.11
Nodes (38): allow(), bumpCursorDenial(), cursorBlockMessage(), deny(), detectProposedHtml(), done(), escapeRegExp(), findingSignature() (+30 more)

### Community 24 - "roots.mjs"
Cohesion: 0.05
Nodes (76): completionAckForAcceptResult(), completionTypeForAcceptResult(), PREVIEW_MODES_WITHOUT_SOURCE_MARKERS, __dirname, ensureServerRunning(), globToRegex(), globToRegex(), resolveFiles() (+68 more)

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

### Community 30 - "site-data.ts"
Cohesion: 0.12
Nodes (17): metadata, PLATE, PLACEMENT, Traditions(), Gopuram(), LANG, ScriptMorph(), SiteHeader() (+9 more)

### Community 31 - "doctor.mjs"
Cohesion: 0.12
Nodes (33): applyFixes(), cli(), collect(), parseArgs(), readProjectRootPatterns(), rel(), renderText(), safeRead() (+25 more)

### Community 32 - "android.md"
Cohesion: 0.09
Nodes (21): Android platform, Color & theming, Components & motion, Layout & structure, The Android slop test, Touch targets, Typography, 1. Accessibility (VoiceOver / TalkBack) (+13 more)

### Community 33 - "partner/page.tsx"
Cohesion: 0.12
Nodes (16): alt, contentType, size, metadata, WITH_US, BLANKS, EMPTY, EnquiryForm() (+8 more)

### Community 34 - "initGlobalBar"
Cohesion: 0.12
Nodes (33): agentHasWorkInFlight(), agentStatusText(), barPaletteForTheme(), brandMarkSvg(), buildDesignHeader(), cursorForInsertAxis(), designPanelCss(), detectPageTheme() (+25 more)

### Community 35 - "parseRgb"
Cohesion: 0.17
Nodes (26): checkColors(), checkElementAIPaletteDOM(), checkElementColors(), checkElementColorsDOM(), checkElementGlow(), checkElementGlowDOM(), checkElementHoverContrast(), checkElementIconTile() (+18 more)

### Community 36 - "runHook"
Cohesion: 0.11
Nodes (34): readExistingProjectFile(), ALLOWED_EXTS, appendDesignSystemNote(), bumpEditCount(), coLocatedStylesheets(), dedupeAgainstCache(), depthIsSet(), designSystemOptions() (+26 more)

### Community 37 - "live-copy-edit-agent.mjs"
Cohesion: 0.14
Nodes (31): applyMockWrites(), buildCopyEditBatchPrompt(), checkFrameworkSourceSyntax(), chooseCopyEditAgent(), COMMAND_AUTH_CACHE, commandAuthed(), commandExists(), compactBatchForPrompt() (+23 more)

### Community 38 - "layout.tsx"
Cohesion: 0.16
Nodes (14): alegreya, archivo, eczar, JSON_LD, metadata, notoKannada, notoMalayalam, notoTamil (+6 more)

### Community 39 - "injected/index.mjs"
Cohesion: 0.12
Nodes (27): browserColorsClose(), browserDesignSystemConfig(), browserFindingsFromMap(), browserHasDirectText(), browserPrimaryFont(), browserRadiusTokens(), browserSampleText(), checkBrowserDesignSystemSources() (+19 more)

### Community 40 - "impeccable-paths.mjs"
Cohesion: 0.17
Nodes (21): resolveProjectRoot(), CRITIQUE_DIR, firstExisting(), getDesignSidecarCandidates(), getDesignSidecarPath(), getImpeccableDir(), getLegacyLiveAnnotationsDir(), getLegacyLiveServerPath() (+13 more)

### Community 41 - "compilerOptions"
Cohesion: 0.07
Nodes (28): dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules (+20 more)

### Community 42 - "resolveLengthPx"
Cohesion: 0.12
Nodes (22): checkElementHeroEyebrow(), checkElementHeroEyebrowDOM(), checkElementQualityDOM(), checkHeroEyebrow(), checkKickerAboveHeading(), checkKickerAboveHeadingDOM(), checkKickerAboveHeadingFromDoc(), checkNumberedSectionLabels() (+14 more)

### Community 43 - "event-validation.mjs"
Cohesion: 0.13
Nodes (26): AGENT_PHASE_SET, FORBIDDEN_MANUAL_EDIT_TEXT_CHARS, INSERT_POSITIONS, isValidId(), isValidMountVariant(), isValidVariantId(), MOUNT_ERROR_MAX_LENGTH, MOUNT_URL_MAX_LENGTH (+18 more)

### Community 44 - "app/page.tsx"
Cohesion: 0.18
Nodes (9): revalidate, Assurances(), Hero(), Invite(), TheRoom(), AssuranceIcon(), JaaliBand(), ASSURANCES (+1 more)

### Community 45 - "new-work.md"
Cohesion: 0.11
Nodes (15): Craft (deprecated alias), Impeccable Documenter, Input Contract, Output Contract, Workflow, Pitfalls, Seed mode, Step 1: Route through new-work's workshop (+7 more)

### Community 46 - "staleness.mjs"
Cohesion: 0.18
Nodes (22): DESIGN_SIDECAR_SCHEMA_VERSION, PRODUCT_DEPRECATED_SECTIONS, PRODUCT_SCHEMA_VERSION, PRODUCT_V4_SECTIONS, readProductSchemaVersion(), readSidecarSchemaVersion(), checkConfig(), checkDesignSidecar() (+14 more)

### Community 47 - "insert-ui.mjs"
Cohesion: 0.09
Nodes (13): canCreateInsert(), clampPlaceholderSize(), computeInsertPosition(), groupSiblingRows(), hitSiblingInsertGap(), horizontalOverlap(), insertCreateDisabledReason(), insertLineCoords() (+5 more)

### Community 48 - "Responsive Design"
Cohesion: 0.08
Nodes (25): Assess Adaptation Challenge, Breakpoints: Content-Driven, Content Adaptation, Desktop Adaptation (Mobile → Desktop), Detect Input Method, Not Just Screen Size, Email Adaptation (Web → Email), Implement Adaptations, Layout Adaptation Patterns (+17 more)

### Community 49 - "parseAnyColor"
Cohesion: 0.10
Nodes (38): buildHtmlPatternCorpora(), checkElementGlow(), checkGlow(), checkHtmlPatterns(), collectCssCustomProps(), collectMarqueeKeyframes(), collectPulseKeyframes(), colorToHex() (+30 more)

### Community 50 - "handleManualEditActivity"
Cohesion: 0.17
Nodes (26): clearStoredManualApplyState(), fetchPendingCount(), handleManualEditActivity(), hidePendingApplyDock(), manualApplyLoadingText(), manualApplyStateKey(), manualEditEventForCurrentPage(), numberOrNull() (+18 more)

### Community 51 - "live-manual-edit-evidence.mjs"
Cohesion: 0.16
Nodes (26): analyzeSourceHint(), buildCandidatesForOp(), buildContextHintsByRef(), buildManualEditEvidence(), collectSearchFiles(), countOps(), decodeBasicHtml(), escapeRegExp() (+18 more)

### Community 52 - "ornament.tsx"
Cohesion: 0.13
Nodes (19): metadata, metadata, metadata, metadata, Creed(), Diamond(), EaveCourse(), HangingDiya() (+11 more)

### Community 53 - "scheduleLazyVisualContrast"
Cohesion: 0.18
Nodes (14): addBrowserFindings(), addVisualContrastFindings(), addVisualContrastResult(), analyzeVisualContrast(), clearOverlays(), detachOverlay(), disconnectLazyVisualContrastObserver(), postExtensionError() (+6 more)

### Community 54 - "parseRgb"
Cohesion: 0.13
Nodes (32): checkColors(), checkElementAIPaletteDOM(), checkElementColors(), checkElementColorsDOM(), checkElementGlowDOM(), checkElementHoverContrast(), checkElementIconTile(), checkElementIconTileDOM() (+24 more)

### Community 55 - "live.md"
Cohesion: 0.09
Nodes (21): Cleanup, Exit, First-time setup, Handle `accept`, Handle `discard`, Handle fallback, Handle `manual_edit_apply`, Handle `prefetch` (+13 more)

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

### Community 60 - "collectNumberedSectionLabelCandidates"
Cohesion: 0.20
Nodes (11): checkKickerAboveHeading(), checkKickerAboveHeadingDOM(), checkNumberedSectionLabels(), checkNumberedSectionLabelsDOM(), cleanInlineText(), collectKickerCandidates(), collectNumberedSectionLabelCandidates(), isKickerCandidate() (+3 more)

### Community 61 - "source-search.mjs"
Cohesion: 0.28
Nodes (8): IMPECCABLE_DIR, matchesTemplateExtension(), resolveLiveTemplateExtensions(), findSessionFile(), findSourceFile(), NEVER_SOURCE_DIRS, SOURCE_SEARCH_DIRS, walk()

### Community 62 - "scheduleLazyVisualContrast"
Cohesion: 0.21
Nodes (12): addBrowserFindings(), addVisualContrastFindings(), addVisualContrastResult(), analyzeVisualContrast(), clearOverlays(), detachOverlay(), disconnectLazyVisualContrastObserver(), rememberVisualContrastAnalysis() (+4 more)

### Community 64 - "sveltekit-adapter.mjs"
Cohesion: 0.17
Nodes (21): sveltekit, applySvelteKitLiveAdapter(), buildSvelteLiveRootComponent(), defaultSvelteLayout(), detectSvelteKitProject(), ensureSvelteLiveRootComponent(), escapeRegExp(), fileIncludes() (+13 more)

### Community 65 - "The Toolkit"
Cohesion: 0.10
Nodes (20): Animate complex properties, Assess What "Extraordinary" Means Here, For data-heavy interfaces, For functional UI, For performance-critical UI, For visual/marketing surfaces, Implement with Discipline, Interact with the device (+12 more)

### Community 66 - "accept-css.mjs"
Cohesion: 0.24
Nodes (20): bakeParamValues(), collectAllSelectors(), collectSelectorsFromNodes(), escapeRegExp(), formatBody(), isToggleOn(), normalizeSelector(), normalizeToggleForVar() (+12 more)

### Community 67 - "manual-edit-routes.mjs"
Cohesion: 0.19
Nodes (19): args, cwd, pageUrlFilter, remaining, compactManualLogText(), summarizeManualApplyFailures(), summarizeManualDiagnostics(), summarizeManualLogFile() (+11 more)

### Community 68 - "handleGo"
Cohesion: 0.07
Nodes (40): applyEditing(), buildInsertPlaceholderSnapshotFromDom(), buildLocatorForLeaf(), buildPickedAnchorSnapshot(), canRestoreManualEditElement(), captureAndEmit(), checkpointPayload(), copyEditContainerContext() (+32 more)

### Community 69 - "impeccable/SKILL.md"
Cohesion: 0.09
Nodes (19): Before you finish, Scope is sovereign, The amplification, The skeleton test, Why it reads flat, Craft floor, Refuse, Verify (+11 more)

### Community 70 - "onAnnotDown"
Cohesion: 0.18
Nodes (19): applyPlaceholderDimensions(), beginEditPin(), buildAnnotationsForCapture(), buildPinElement(), cancelEditingPin(), finalizeEditingPin(), initAnnotOverlay(), localCoords() (+11 more)

### Community 71 - "sampleCssBackground"
Cohesion: 0.23
Nodes (13): analyzeVisualContrastCandidate(), blendRgba(), clampByte(), firstCssUrl(), getLayerValue(), loadVisualContrastImage(), pickWorstContrastColor(), pointToImageSource() (+5 more)

### Community 72 - "checkQuality"
Cohesion: 0.16
Nodes (14): checkElementOversizedH1(), checkElementOversizedH1DOM(), checkElementQuality(), checkOversizedH1(), checkQuality(), colorsNearlyMatch(), cssColorIsTransparent(), getComputedStyleFor() (+6 more)

### Community 73 - "detect-utils.mjs"
Cohesion: 0.28
Nodes (13): astro, detectAstroProject(), fileExists(), findConfigFile(), firstExistingFile(), hasAnyDependency(), literalConfigFiles(), readPackageDeps() (+5 more)

### Community 74 - "checkElementGptBorderShadowDOM"
Cohesion: 0.32
Nodes (8): borderColorsFromStyle(), borderWidthsFromStyle(), checkElementGptBorderShadow(), checkElementGptBorderShadowDOM(), checkGptThinBorderWideShadow(), cssColorAlpha(), shadowLayerAlpha(), shadowMaxBlurPx()

### Community 75 - "resolveLiveInjectionAnchor"
Cohesion: 0.11
Nodes (27): acceptedDomAlreadyClean(), applyOriginalAttrsToSvelteAnchor(), buildSvelteExpressionTextMap(), buildSveltePropValuesFromLiveElement(), buildSveltePropValuesV2(), cloneWithoutElements(), collectTextNodes(), collectVisibleTexts() (+19 more)

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
Cohesion: 0.16
Nodes (18): analyzeVisualContrastCandidate(), blendRgba(), clampByte(), firstCssUrl(), getLayerValue(), loadVisualContrastImage(), parseObjectPosition(), parsePositionPair() (+10 more)

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

### Community 84 - "GENERIC_FONTS"
Cohesion: 0.15
Nodes (18): checkPageTypography(), checkTypography(), isBrandFontOnOwnDomain(), firstOverusedGoogleFont(), checkStaticPageTypography(), checkPageTypography(), checkTypography(), resolveSerif() (+10 more)

### Community 85 - "tasteskill: Anti-Slop Frontend Skill"
Cohesion: 0.18
Nodes (11): 0.A Read these signals first, 0.B Output a one-line "Design Read" before generating, 0. BRIEF INFERENCE (Read the Room Before Anything Else), 0.C If the brief is ambiguous, ask one question, do not guess, 0.D Anti-Default Discipline, 13. OUT OF SCOPE, 14. FINAL PRE-FLIGHT CHECK, 2.A When to reach for a real design system (use official packages) (+3 more)

### Community 86 - "Appendix B - Canonical Sources (read these before reinventing)"
Cohesion: 0.13
Nodes (15): Appendix B - Canonical Sources (read these before reinventing), Apple Liquid Glass (Apple platforms only), Atlassian, Bootstrap, Carbon, Fluent UI, GOV.UK, Material Web (+7 more)

### Community 87 - "Generate Report"
Cohesion: 0.13
Nodes (14): 1. Accessibility (A11y), 2. Performance, 3. Theming, 4. Responsive Design, 5. Implementation Integrity (CRITICAL), Audit Health Score, Detailed Findings by Severity, Diagnostic Scan (+6 more)

### Community 88 - "live-complete.mjs"
Cohesion: 0.43
Nodes (6): FORBIDDEN, verifyAcceptedFile(), completeCli(), completeThroughServer(), parseArgs(), readServerInfo()

### Community 89 - "live-status.mjs"
Cohesion: 0.29
Nodes (14): collectManualApplyFiles(), manualApplyReplyCommand(), manualApplyResumeHint(), mountFailureAction(), parseArgs(), renderSummary(), resumeCli(), summarizeManualApplyEvent() (+6 more)

### Community 90 - "Impeccable Asset Producer"
Cohesion: 0.14
Nodes (12): Core Rule, Decision Sketches, Impeccable Asset Producer, Input Contract, Output Contract, Prompt Pattern, Workflow, Generate three compositional options (+4 more)

### Community 91 - "optimize.md"
Cohesion: 0.14
Nodes (13): Animation Performance, Assess Performance Issues, Core Web Vitals Optimization, Cumulative Layout Shift (CLS < 0.1), Interaction to Next Paint (INP < 200ms), Largest Contentful Paint (LCP < 2.5s), Loading Performance, Network Optimization (+5 more)

### Community 92 - "collectVisualContrastCandidates"
Cohesion: 0.18
Nodes (13): buildSelectorSegment(), collectVisualContrastCandidates(), collectVisualContrastReasons(), generateSelector(), getDirectText(), getDirectTextRect(), isLikelyHashedClass(), tailwind (+5 more)

### Community 93 - "journal.mjs"
Cohesion: 0.27
Nodes (14): PATCH_UNDOERS, clearInjectJournal(), healArtifact(), healInjectJournal(), INJECT_JOURNAL_RELPATH, INJECT_JOURNAL_VERSION, injectJournalPath(), insideProject() (+6 more)

### Community 94 - "Scan mode (approach C: auto-extract, then confirm descriptive language)"
Cohesion: 0.15
Nodes (13): Component translation rules, Narrative mapping, Scan mode (approach C: auto-extract, then confirm descriptive language), Schema, Step 1: Find the design assets, Step 2: Auto-extract what can be auto-extracted, Step 2b: Stage the frontmatter, Step 3: Ask the user for qualitative language (+5 more)

### Community 95 - "live-inject.mjs"
Cohesion: 0.12
Nodes (32): getLegacyLiveConfigPath(), resolveLiveConfigPath(), describeInjectArtifacts(), frameworkIgnorePatterns(), resolveFramework(), appendOriginToDirective(), buildTagBlock(), commentClose() (+24 more)

### Community 96 - "nuxt.mjs"
Cohesion: 0.29
Nodes (7): applyNuxtLiveAdapter(), buildNuxtPlugin(), detectNuxtProject(), nuxt, NUXT_PLUGIN_MARKER, NUXT_PLUGIN_NAME, removeNuxtLiveAdapter()

### Community 97 - "critique-storage.mjs"
Cohesion: 0.17
Nodes (22): coerceSlug(), listSnapshotsForSlug(), main(), nowFilenameStamp(), parseFrontmatter(), readLatestSnapshot(), readTrend(), serializeFrontmatter() (+14 more)

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

### Community 103 - "target-args.mjs"
Cohesion: 0.36
Nodes (5): parseCliOptions(), parseTargetOptions(), parseTargetPath(), TargetArgError, resolveLiveTarget()

### Community 104 - "ui-core.mjs"
Cohesion: 0.23
Nodes (10): createLiveBrowserDomHelpers(), activeElementDeep(), appendStyleToLiveUiRoot(), appendToLiveUiRoot(), escapeCssIdent(), getLiveUiElementById(), LIVE_CHROME_MOUNT_CONTRACT, LIVE_UI_COMPONENT_IDS (+2 more)

### Community 105 - "frameworks/index.mjs"
Cohesion: 0.22
Nodes (8): COMMENT_SYNTAXES, FRAMEWORKS, INJECT_KINDS, PREVIEW_MODES, SOURCE_TRAIT_DEFAULTS, STYLE_MODES, TAG_PATCH_KIND, staticHtml

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
Cohesion: 0.30
Nodes (10): buildGenerationPreflight(), compactError(), execFileAsync, insertTarget(), normalizeTarget(), replaceTarget(), runGenerationPreflight(), sourceResolutionCache (+2 more)

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
Cohesion: 0.33
Nodes (10): appendStalenessDirective(), projectRootsDiagnostic(), buildStalenessDirective(), cachePath(), filterFreshFindings(), pruneCache(), readCache(), readJson() (+2 more)

### Community 120 - "resolveProject"
Cohesion: 0.19
Nodes (14): contextSourcePath(), contextSourceStatus(), firstExisting(), isPathInside(), isPathInsideOrEqual(), nearestPackageRootBetween(), nearestTargetContextRoot(), resolveCandidateContextSummary() (+6 more)

### Community 121 - "resolveObjectImageRect"
Cohesion: 0.50
Nodes (5): parseObjectPosition(), parsePositionPair(), parsePositionToken(), resolveObjectImageRect(), resolvePaintedImageRect()

### Community 122 - "Common Cognitive Load Violations"
Cohesion: 0.22
Nodes (9): 1. The Wall of Options, 2. The Memory Bridge, 3. The Hidden Navigation, 4. The Jargon Barrier, 5. The Visual Noise Floor, 6. The Inconsistent Pattern, 7. The Multi-Task Demand, 8. The Context Switch (+1 more)

### Community 123 - "Operate mode depth (and Read notes)"
Cohesion: 0.22
Nodes (9): Color, Components, Layout, Motion, Operate mode depth (and Read notes), Product constraints, Product permissions, The product slop test (+1 more)

### Community 124 - "Shape"
Cohesion: 0.22
Nodes (8): Cadence, Confirm and stop, Phase 1: Discovery interview, Phase 2: Resolve the design direction, Phase 3: Write the brief, Round 1: purpose, people, and outcome, Round 2: material, behavior, and boundaries, Shape

### Community 125 - "isCardLike"
Cohesion: 0.25
Nodes (8): checkLayout(), checkPageLayout(), isCardLike(), isCardLikeDOM(), isCardLikeFromProps(), isRepeatedTextContainer(), parseRadiusToPx(), resolveBorderRadiusPx()

### Community 126 - "9. AI TELLS (Forbidden Patterns)"
Cohesion: 0.25
Nodes (8): 9.A Visual & CSS, 9. AI TELLS (Forbidden Patterns), 9.B Typography, 9.C Layout & Spacing, 9.D Content & Data ("Jane Doe" Effect), 9.E External Resources & Components, 9.F Production-Test Tells (banned outright), 9.G EM-DASH BAN (the single most-violated Tell)

### Community 127 - "Persona-Based Design Testing"
Cohesion: 0.25
Nodes (8): 1. Impatient Power User: "Alex", 2. Confused First-Timer: "Jordan", 3. Accessibility-Dependent User: "Sam", 4. Deliberate Stress Tester: "Riley", 5. Distracted Mobile User: "Casey", Persona-Based Design Testing, Project-Specific Personas, Selecting Personas

### Community 128 - "Extract Flow"
Cohesion: 0.25
Nodes (7): Extract Flow, Step 1: Discover the Design System, Step 2: Identify Patterns, Step 3: Plan Extraction, Step 4: Extract & Enrich, Step 5: Migrate, Step 6: Document

### Community 129 - "doctor.md"
Cohesion: 0.08
Nodes (22): Adaptation Strategies, Assess Adaptation Challenge, Implement & Verify, Orientation & foldables, Phone → Tablet (iPad / large screens), Platform → platform (iOS ↔ Android), Web → native (porting a website or web app), Monorepo notes (+14 more)

### Community 130 - "live-setup.md"
Cohesion: 0.25
Nodes (7): append-arrays, append-string, Config drift, Consent prompt (use this phrasing), CSP detection (first-time only), Troubleshooting, Write the config

### Community 131 - "source-lock.mjs"
Cohesion: 0.50
Nodes (7): isLiveServerPidReachable(), clearStaleLock(), readLock(), releaseOwnLock(), sleepSync(), sourceLockPath(), withSourceLockSync()

### Community 132 - "inline-ignores.mjs"
Cohesion: 0.40
Nodes (9): addRules(), applyInlineIgnores(), getSet(), hasDirectives(), isInlineIgnored(), normalizeRule(), parseInlineIgnores(), parseRuleList() (+1 more)

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

### Community 137 - "checkRadialSpotlight"
Cohesion: 0.60
Nodes (5): checkElementRadialSpotlight(), checkElementRadialSpotlightDOM(), checkRadialSpotlight(), elementGradientValue(), spotlightLabel()

### Community 138 - "isGeneratedFile"
Cohesion: 0.70
Nodes (4): hasGeneratedHeader(), HEADER_MARKERS, isGeneratedFile(), isGitIgnored()

### Community 139 - "Cognitive Load Assessment"
Cohesion: 0.29
Nodes (7): Cognitive Load Assessment, Cognitive Load Checklist, Extraneous Load: Bad Design, Germane Load: Learning Effort, Intrinsic Load: The Task Itself, The Working Memory Rule, Three Types of Cognitive Load

### Community 140 - "Impeccable Manual Edit Applier"
Cohesion: 0.29
Nodes (6): Checks, Entry Atomicity, Impeccable Manual Edit Applier, Input Contract, Output Contract, Workflow

### Community 141 - "applyDeferredSvelteComponentAccepts"
Cohesion: 0.60
Nodes (5): applyLegacyDeferredAcceptsOnStartup(), applyDeferredSvelteComponentAccepts(), deferredAcceptsPath(), readDeferredAccepts(), writeDeferredAccept()

### Community 142 - "Impeccable Finish Reviewer"
Cohesion: 0.29
Nodes (6): Checks, in order, Disposition, Impeccable Finish Reviewer, Input Contract, Output Contract, Verdict Pass

### Community 143 - "serializeFindings"
Cohesion: 0.67
Nodes (4): postSerializedFindings(), renderBrowserFindings(), scanResultMeta(), serializeFindings()

### Community 144 - "layout.md"
Cohesion: 0.29
Nodes (6): Apply, Live-mode signature params, Set the spatial thesis, Two isolated assessments, Verify, Visitor mode

### Community 145 - "template-extensions.mjs"
Cohesion: 0.25
Nodes (9): ACK_EXTS, shouldEmitAckForFile(), extensionCache, LIVE_TEMPLATE_EXTENSIONS, matchConfiguredExtension(), mergeExtensions(), normalizeExtensionEntries(), readLiveTemplateExtensions() (+1 more)

### Community 146 - "12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)"
Cohesion: 0.40
Nodes (5): 12.A File Location, 12.B Required Frontmatter, 12.C Required Body Sections, 12.D Block-Library Discipline, 12. THE BLOCK LIBRARY (Contract - Implementations Land Here Iteratively)

### Community 147 - "5. CONTEXT-AWARE PROACTIVITY"
Cohesion: 0.40
Nodes (5): 5.A Sticky-Stack - Canonical Skeleton, 5.B Horizontal-Pan - Canonical Skeleton, 5.C Scroll-Reveal Stagger - Canonical Skeleton (lighter alternative), 5. CONTEXT-AWARE PROACTIVITY, 5.D Forbidden Animation Patterns

### Community 148 - "8. DARK MODE PROTOCOL"
Cohesion: 0.40
Nodes (5): 8.A Token Strategy (pick one, stick to it), 8.B Do Not Prescribe Specific Colors Here, 8.C Default Mode, 8.D Test in Both Modes Before Finishing, 8. DARK MODE PROTOCOL

### Community 149 - "BORDER_SAFE_TAGS"
Cohesion: 0.48
Nodes (7): checkBorders(), checkElementBorders(), checkElementBordersDOM(), checkElementPseudoStripeDOM(), isStatusContextElement(), isTabContextElement(), BORDER_SAFE_TAGS

### Community 150 - "browser-script-parts.mjs"
Cohesion: 0.33
Nodes (6): assembleLiveBrowserScript(), assertLiveBrowserScriptParts(), LIVE_BROWSER_SCRIPT_PARTS, readLiveBrowserScriptParts(), resolveLiveBrowserScriptParts(), loadBrowserScripts()

### Community 151 - "colorize.md"
Cohesion: 0.25
Nodes (7): Apply at system scale, Audit before choosing, Choose a strategy, Contrast and perception, Live-mode signature params, Verify, Visitor mode

### Community 152 - "7. DIAL DEFINITIONS (Technical Reference)"
Cohesion: 0.50
Nodes (4): 7. DIAL DEFINITIONS (Technical Reference), DESIGN_VARIANCE (Level 1-10), MOTION_INTENSITY (Level 1-10), VISUAL_DENSITY (Level 1-10)

### Community 153 - "Heuristics Scoring Guide"
Cohesion: 0.50
Nodes (4): Heuristics Scoring Guide, Issue Severity (P0–P3), Reference Material, Score Summary

### Community 154 - "detect.mjs"
Cohesion: 0.50
Nodes (3): candidates, detectorPath, __dirname

### Community 155 - "normalizeGitHubEvent"
Cohesion: 0.47
Nodes (6): applyPatchText(), envProjectDir(), looksLikeApplyPatch(), normalizeGitHubEvent(), normalizeHookEvent(), parseGitHubToolArgs()

### Community 156 - "1. THE THREE DIALS (Core Configuration)"
Cohesion: 0.50
Nodes (4): 1.A Dial Inference (design read → dial values), 1.B Use-Case Presets, 1.C How the Dials Drive Output, 1. THE THREE DIALS (Core Configuration)

### Community 157 - "hook.mjs"
Cohesion: 0.83
Nodes (3): isStopEvent(), main(), readStdin()

### Community 158 - "provider.mjs"
Cohesion: 0.50
Nodes (3): IMPECCABLE_COMMAND, IMPECCABLE_COMMAND_PREFIX, IMPECCABLE_PROVIDER_ID

### Community 159 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 160 - "readConfig"
Cohesion: 0.40
Nodes (5): cloneDefaultConfig(), detectorSection(), hookSection(), readConfig(), safeReadJson()

## Knowledge Gaps
- **793 isolated node(s):** `here`, `API_BASE`, `API_TIMEOUT_MS`, `localStates`, `SEED_MODES` (+788 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `el()` connect `el` to `live-browser.js`, `checks.mjs`, `initGlobalBar`, `connectSSE`, `design-system.mjs`, `detect-text.mjs`, `setLiveState`, `detect-antipatterns-browser.js`, `initPageChat`, `serializeFindings`, `css-cascade.mjs`, `GENERIC_FONTS`, `parseRgb`, `collectBrowserFindings`, `svelte-ast.mjs`, `collectVisualContrastCandidates`, `isCardLike`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Why does `ACTIONS` connect `hook-admin.mjs` to `el`, `initGlobalBar`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `collectPatternNames()` connect `svelte-ast.mjs` to `el`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Are the 23 inferred relationships involving `el()` (e.g. with `collectVisualContrastCandidates()` and `renderBrowserFindings()`) actually correct?**
  _`el()` has 23 INFERRED edges - model-reasoned connections that need verification._
- **What connects `here`, `API_BASE`, `API_TIMEOUT_MS` to the rest of the system?**
  _793 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `live-browser.js` be split into smaller, more focused modules?**
  _Cohesion score 0.028661479365704717 - nodes in this community are weakly interconnected._
- **Should `checks.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.032476462498677666 - nodes in this community are weakly interconnected._