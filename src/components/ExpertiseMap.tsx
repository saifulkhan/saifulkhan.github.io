import React, { useState } from 'react';
import NextLink from 'next/link';
import { Box, Button, ButtonBase, Chip, Link as MuiLink, Tooltip, Typography, useTheme } from '@mui/material';
import { alpha, lighten } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import TouchAppIcon from '@mui/icons-material/TouchAppRounded';
import { publicationAnchor, publicationsList } from '../data/publications';
import projectsList from '../data/projects';
import PdfLink from './PdfLink';
import {
  domains,
  facilities,
  interfaces,
  mapProjects,
  mapThemes,
  services,
  workflow,
  type MapItem,
  type MapProject,
  type PaperCite,
  type ServiceGroup,
} from '../data/expertise';

type Selection =
  | { kind: 'none' }
  | { kind: 'projects'; ids: string[]; themeId?: string }
  | { kind: 'item'; item: MapItem };

interface ItemOptions {
  center?: boolean;
  neutral?: boolean; // grey at rest, like the application and facility boxes on the slide
  neutralBg?: string;
  labelColor?: string;
  showProjects?: boolean; // second line lists the projects instead of the item's note
  groupLit?: boolean; // false when the whole card is already dimmed
}

// colours taken from slide 25 of the talk
const BAND_COLOR = '#00796B';
const ROW_COLOR = '#4338CA';
const FACILITY_COLOR = '#2E2D62';

// a list of projects in the order of the Projects row (A–Z), so tooltips and cards list them the same way
const inOrder = (ids: string[] = []) => mapProjects.filter((p) => ids.includes(p.id));
const namesOf = (ids: string[] = []) =>
  inOrder(ids)
    .map((p) => p.name)
    .join(', ');
// each project's entry in the Projects list: its title, description, roles, organisations, funding, status and news
const entryById = new Map(projectsList.flatMap((p) => (p.id ? [[p.id, p] as const] : [])));

// Where each item sits: its layer of the map, and a tag naming what it is, shown above its name in the details
type Layer = 'domain' | 'band' | 'facility';
interface Place {
  layer: Layer;
  tag: string;
}
const place =
  (layer: Layer, tag: string) =>
  (item: MapItem): [string, Place] => [item.id, { layer, tag }];
const placeOf = new Map<string, Place>([
  ...domains.map(place('domain', 'Application domain')),
  ...interfaces.map(place('band', 'Interfaces')),
  // e.g. "Visualization · Four levels" and "Visualization · Methods", after the card's headings
  ...services.flatMap((g) => [
    ...g.items.map(place('band', [g.label, g.itemsLabel].filter(Boolean).join(' · '))),
    ...(g.methods ? g.methods.items.map(place('band', `${g.label} · ${g.methods.label}`)) : []),
  ]),
  ...workflow.map(place('band', 'Workflow')),
  ...facilities.map(place('facility', 'Built on')),
]);

const SMALL_CAPS = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'text.secondary',
} as const;

// A label and its chips; chips that wrap onto a second line start under the first chip, not under the label. An
// optional action sits at the row's right end (on phones, on the label's line above the chips).
const ControlRow = ({
  label,
  action,
  children,
}: {
  label: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: 'minmax(0, 1fr) auto', sm: '84px minmax(0, 1fr) auto' },
      gridTemplateAreas: { xs: '"label action" "chips chips"', sm: '"label chips action"' },
      alignItems: 'baseline',
      gap: 0.75,
    }}
  >
    <Typography component="span" sx={{ ...SMALL_CAPS, gridArea: 'label' }}>
      {label}
    </Typography>
    <Box sx={{ gridArea: 'chips', display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>{children}</Box>
    {action && <Box sx={{ gridArea: 'action' }}>{action}</Box>}
  </Box>
);

const LinkList = ({ label, links }: { label: string; links: { label: string; url: string }[] }) =>
  links.length === 0 ? null : (
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.75, flexWrap: 'wrap', mt: 0.75 }}>
      <Typography component="span" sx={SMALL_CAPS}>
        {label}
      </Typography>
      {links.map((link, i) => (
        <React.Fragment key={link.url}>
          {i > 0 && (
            <Box component="span" sx={{ color: 'text.disabled' }}>
              ·
            </Box>
          )}
          <MuiLink href={link.url} target="_blank" rel="noopener noreferrer" sx={{ fontSize: 13 }}>
            {link.label}
          </MuiLink>
        </React.Fragment>
      ))}
    </Box>
  );

interface PaperRef {
  title: string;
  label: string; // venue and year, e.g. "IEEE TVCG 2021"
  href: string;
}

// cited papers that are in the publication list, each linking to its entry there
const paperRefs = (papers: PaperCite[] = []): PaperRef[] =>
  papers.flatMap(({ title, label }) =>
    publicationsList.some((p) => p.title.trim() === title)
      ? [{ title, label, href: `/#${publicationAnchor(title)}` }]
      : [],
  );

// Papers in short form (venue, then title); each opens the paper's full citation in the publication list
const PaperList = ({ papers }: { papers: PaperRef[] }) =>
  papers.length === 0 ? null : (
    <Box sx={{ mt: 1 }}>
      <Typography component="h4" sx={SMALL_CAPS}>
        Papers
      </Typography>
      <Box component="ul" sx={{ m: 0, mt: 0.25, p: 0, listStyle: 'none' }}>
        {papers.map((paper) => (
          <Box component="li" key={paper.href}>
            <MuiLink
              component={NextLink}
              href={paper.href}
              title={paper.title}
              underline="hover"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { sm: 'baseline' },
                columnGap: 1.5,
                py: { xs: 0.25, sm: 0 },
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              <Box
                component="span"
                sx={{ flexShrink: 0, width: { sm: '10.5em' }, fontWeight: 600, color: 'text.secondary' }}
              >
                {paper.label}
              </Box>
              <Box
                component="span"
                sx={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: { sm: 'nowrap' } }}
              >
                {paper.title}
              </Box>
            </MuiLink>
          </Box>
        ))}
      </Box>
    </Box>
  );

// A project's card: its entry in the Projects list, plus what the map adds (highlights, links, papers). A short card,
// with a button that shows the project on the map, leaves out the description.
const ProjectCard = ({ project, onShow }: { project: MapProject; onShow?: () => void }) => {
  const entry = entryById.get(project.id);
  if (!entry) return null;
  const papers = paperRefs(project.papers);
  // funder first, then the amount if given: "EPSRC (£584k)", as in the Projects list
  const [funder, ...amount] = entry.funding;
  const meta = [
    entry.role.filter((r) => r.trim()).join(', '),
    entry.organisation.join(', '),
    funder && (amount.length ? `${funder} (${amount.join(', ')})` : funder),
  ];
  return (
    <Box
      data-analytics-item={entry.title}
      sx={{ border: 1, borderColor: 'divider', borderRadius: 2, p: 2, bgcolor: 'background.paper' }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
        <Typography variant="subtitle1" component="h3" sx={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35 }}>
          {entry.title}
        </Typography>
        {entry.status === 'Ongoing' && (
          <Chip
            label="Active"
            size="small"
            color="success"
            variant="outlined"
            sx={{ height: 20, fontSize: 11, fontWeight: 600 }}
          />
        )}
      </Box>
      <Typography variant="body2" sx={{ fontSize: 13, color: 'text.secondary', mt: 0.25 }}>
        {meta.filter(Boolean).join(' · ')}
      </Typography>
      {onShow ? (
        <Button size="small" onClick={onShow} sx={{ mt: 0.5, px: 0, minWidth: 0 }}>
          Show on the map
        </Button>
      ) : (
        <>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {entry.description}
          </Typography>
          {project.highlights && (
            <Box component="ul" sx={{ m: 0, mt: 1, pl: 2.25 }}>
              {project.highlights.map((h) => (
                <Typography key={h} component="li" variant="body2" sx={{ fontWeight: 600 }}>
                  {h}
                </Typography>
              ))}
            </Box>
          )}
          <LinkList label="Links" links={project.links ?? []} />
          {entry.news && entry.news.length > 0 && (
            // as in the Projects list: PDF icons, with the title as the hover text and accessible label
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mt: 0.75 }}>
              <Typography component="span" sx={SMALL_CAPS}>
                News
              </Typography>
              {entry.news.map((item) => (
                <PdfLink key={item.url} url={item.url} fallback={item.fallback} label={`${item.title} (PDF)`} />
              ))}
            </Box>
          )}
          <PaperList papers={papers} />
        </>
      )}
    </Box>
  );
};

// Details of a selected item: what it is, its papers and its projects. A domain or facility has little text of its
// own, so its projects are shown in full; a service has its own description and papers, so short cards will do.
const ItemDetails = ({ item, onShowProject }: { item: MapItem; onShowProject: (id: string) => void }) => {
  const { layer, tag }: Place = placeOf.get(item.id) ?? { layer: 'band', tag: '' };
  const projects = inOrder(item.projects);
  const full = layer !== 'band';
  const heading = { domain: projects.length > 1 ? 'Projects' : 'Project', band: 'Delivered in', facility: 'Used by' }[
    layer
  ];
  return (
    <>
      <Typography sx={SMALL_CAPS}>{tag}</Typography>
      <Typography component="h3" sx={{ fontSize: 18, fontWeight: 700, lineHeight: 1.35 }}>
        {item.label}
      </Typography>
      {item.about && (
        <Typography variant="body1" sx={{ mt: 0.75, maxWidth: 820, textWrap: 'pretty' }}>
          {item.about}
        </Typography>
      )}
      <PaperList papers={paperRefs(item.papers)} />
      <Typography component="h4" sx={{ ...SMALL_CAPS, mt: 2.5, mb: 1 }}>
        {heading}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'minmax(0, 1fr)',
            md: full && projects.length === 1 ? '1fr' : 'repeat(2, minmax(0, 1fr))',
          },
          gap: 2,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onShow={full ? undefined : () => onShowProject(project.id)} />
        ))}
      </Box>
    </>
  );
};

/**
 * Layered map of the software-services layer (after slide 25 of the talk): application domains on top, services
 * in the middle, facilities below. Coloured items were delivered in a project; grey items are the roadmap.
 * Selecting a project (or a theme) lights up the parts it delivered. Selecting an item lights up what it connects to
 * in the other layers through shared projects (a domain's services, a service's domains and facilities), and the
 * panel below describes it, with its papers.
 */
const ExpertiseMap = () => {
  const theme = useTheme();
  const dark = theme.palette.mode === 'dark';
  const primary = theme.palette.primary.main;
  const [sel, setSel] = useState<Selection>({ kind: 'none' });

  const tone = (color: string) => ({
    text: dark ? lighten(color, 0.45) : color,
    bg: alpha(color, dark ? 0.2 : 0.08),
    bgLit: alpha(color, dark ? 0.38 : 0.2),
    ring: dark ? lighten(color, 0.3) : color,
  });

  const active = sel.kind !== 'none';
  const selectedIds = sel.kind === 'projects' ? sel.ids : [];
  const litProjects = new Set(sel.kind === 'item' ? (sel.item.projects ?? []) : selectedIds);

  // Lit: delivered by a selected project, or the selected item itself, or connected to it: in another layer and sharing
  // a project, e.g. the services delivered for a selected domain, or the domains and facilities of a selected service
  const isLit = (item: MapItem) => {
    if (sel.kind === 'projects') return (item.projects ?? []).some((id) => sel.ids.includes(id));
    if (sel.kind !== 'item') return false;
    if (item.id === sel.item.id) return true;
    return (
      placeOf.get(item.id)?.layer !== placeOf.get(sel.item.id)?.layer &&
      (item.projects ?? []).some((id) => litProjects.has(id))
    );
  };

  const clear = () => setSel({ kind: 'none' });
  const toggleProject = (id: string) =>
    setSel((prev) => {
      const ids = prev.kind === 'projects' ? prev.ids : [];
      const next = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
      return next.length > 0 ? { kind: 'projects', ids: next } : { kind: 'none' };
    });
  const selectItem = (item: MapItem) =>
    setSel((prev) => (prev.kind === 'item' && prev.item.id === item.id ? { kind: 'none' } : { kind: 'item', item }));

  // the roadmap look, grey and dashed: items not delivered yet, and the "More to come" box ending each service card
  const roadmapSx = {
    px: 1,
    py: 0.6,
    borderRadius: 1.5,
    border: '1px dashed',
    borderColor: 'text.disabled',
    color: 'text.disabled',
    fontStyle: 'italic',
    fontSize: 13,
    lineHeight: 1.35,
    opacity: active ? 0.4 : 1,
    transition: 'opacity 0.2s',
  };

  const renderItem = (item: MapItem, color: string, opts: ItemOptions = {}) => {
    const t = tone(color);
    const align = opts.center ? 'center' : 'left';
    const note = opts.showProjects ? namesOf(item.projects) : item.note;

    if (!item.projects?.length) {
      return (
        <Tooltip key={item.id} title="On the roadmap: not delivered yet" enterDelay={300}>
          <Box
            sx={{
              ...roadmapSx,
              // centred like the delivered items when the row is taller than the label
              display: 'flex',
              alignItems: 'center',
              justifyContent: opts.center ? 'center' : 'flex-start',
              textAlign: align,
            }}
          >
            {item.label}
          </Box>
        </Tooltip>
      );
    }

    const lit = isLit(item);
    const dim = active && !lit && opts.groupLit !== false;
    const restBg = opts.neutral ? (dark ? alpha('#ffffff', 0.06) : (opts.neutralBg ?? '#F2F2F2')) : t.bg;
    // a domain already shows its projects on its second line, so it needs no tooltip
    const layer = placeOf.get(item.id)?.layer;
    const tip =
      layer === 'domain' ? '' : `${layer === 'facility' ? 'Used by' : 'Delivered in'} ${namesOf(item.projects)}`;

    return (
      <Tooltip key={item.id} title={tip} enterDelay={300}>
        <ButtonBase
          onClick={() => selectItem(item)}
          aria-pressed={sel.kind === 'item' && sel.item.id === item.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: opts.center ? 'center' : 'flex-start',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            px: 1,
            py: 0.6,
            borderRadius: 1.5,
            textAlign: align,
            fontFamily: 'inherit',
            fontSize: 13,
            lineHeight: 1.35,
            fontWeight: lit ? 700 : 600,
            color: opts.neutral ? (opts.labelColor ?? 'text.primary') : t.text,
            bgcolor: lit ? t.bgLit : restBg,
            border: '1.5px solid',
            borderColor: lit ? t.ring : 'transparent',
            opacity: dim ? 0.3 : 1,
            transition: 'opacity 0.2s, background-color 0.2s, border-color 0.2s',
            '&:hover': { borderColor: lit ? t.ring : alpha(t.ring, 0.5) },
            '&.Mui-focusVisible': { outline: `2px solid ${t.ring}`, outlineOffset: 2 },
          }}
        >
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
            {item.label}
            {item.software && <CodeIcon titleAccess="Open-source code" sx={{ fontSize: 14, opacity: 0.75 }} />}
          </Box>
          {note && (
            <Box component="span" sx={{ fontSize: 11.5, fontWeight: 500, color: 'text.secondary', mt: 0.25 }}>
              {note}
            </Box>
          )}
        </ButtonBase>
      </Tooltip>
    );
  };

  // a row of the services band with its label on the left, e.g. "Interfaces"
  const renderRow = (label: string, items: MapItem[]) => {
    const t = tone(ROW_COLOR);
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '96px minmax(0, 1fr)' },
          alignItems: 'center',
          columnGap: 1.5,
          rowGap: 0.75,
        }}
      >
        <Typography component="h3" sx={{ fontWeight: 700, fontSize: 14.5, color: t.text }}>
          {label}
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 0.75 }}>
          {items.map((item) => renderItem(item, ROW_COLOR, { center: true }))}
        </Box>
      </Box>
    );
  };

  const renderCard = (group: ServiceGroup) => {
    const t = tone(group.color);
    const cardLit = [...group.items, ...(group.methods?.items ?? [])].some(isLit);
    // a list of items, with a heading when the card has two lists (the four levels, then methods for any level); the
    // card's last list ends with a grey "More to come" box, styled as roadmap: services to come, many not yet known
    // (not "… more", which reads as items left off the map)
    const renderList = (items: MapItem[], heading?: string, last = false) => (
      <>
        {heading && (
          <Typography component="h4" sx={{ ...SMALL_CAPS, fontSize: 10.5, textAlign: 'center', mt: 0.5 }}>
            {heading}
          </Typography>
        )}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {items.map((item) => renderItem(item, group.color, { groupLit: cardLit }))}
          {last && (
            <Tooltip title="On the roadmap: more services to come" enterDelay={300}>
              <Box role="note" sx={roadmapSx}>
                More to come
              </Box>
            </Tooltip>
          )}
        </Box>
      </>
    );
    return (
      <Box
        key={group.id}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0.75,
          p: 1.25,
          pt: 1,
          borderRadius: 2.5,
          bgcolor: 'background.paper',
          boxShadow: dark ? 'none' : '0 1px 2px rgba(31, 35, 40, 0.06)',
          opacity: active && !cardLit ? 0.4 : 1,
          transition: 'opacity 0.2s',
        }}
      >
        <Box sx={{ height: 4, mx: 2.5, borderRadius: 2, bgcolor: group.color }} />
        <Box
          sx={{
            // room for a two-line label, so the items line up across cards
            minHeight: 38,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            component="h3"
            sx={{ fontWeight: 700, fontSize: 15.5, lineHeight: 1.2, color: t.text, textAlign: 'center' }}
          >
            {group.label}
          </Typography>
        </Box>
        {renderList(group.items, group.itemsLabel, !group.methods)}
        {group.methods && renderList(group.methods.items, group.methods.label, true)}
      </Box>
    );
  };

  const rowLabel = (area: string, text: string, strong = false) => (
    <Typography
      component="h3"
      sx={{
        gridArea: area,
        alignSelf: { lg: 'center' },
        mt: { xs: 1.5, lg: 0 },
        fontWeight: 700,
        lineHeight: 1.25,
        color: strong ? 'text.primary' : 'text.secondary',
        fontSize: { xs: 11, lg: 17 },
        letterSpacing: { xs: '0.08em', lg: 0 },
        textTransform: { xs: 'uppercase', lg: 'none' },
      }}
    >
      {text}
    </Typography>
  );

  const renderPill = (project: MapProject) => {
    const on = litProjects.has(project.id);
    return (
      <Chip
        key={project.id}
        label={project.name}
        size="small"
        clickable
        color={on ? 'primary' : 'default'}
        variant={on ? 'filled' : 'outlined'}
        onClick={() => toggleProject(project.id)}
        aria-pressed={selectedIds.includes(project.id)}
        sx={{ fontWeight: 600 }}
      />
    );
  };

  const activeTheme = sel.kind === 'projects' ? mapThemes.find(({ id }) => id === sel.themeId) : undefined;

  return (
    <Box onKeyDown={(e) => e.key === 'Escape' && clear()}>
      {/* themes and projects that drive the highlighting */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2.5 }}>
        <ControlRow
          label="Themes"
          action={
            // always in place, hidden until something is selected, so the rows don't move when it appears
            <Button size="small" onClick={clear} sx={{ py: 0, visibility: active ? 'visible' : 'hidden' }}>
              Clear selection
            </Button>
          }
        >
          {mapThemes.map((th) => {
            const on = activeTheme?.id === th.id;
            // styled like the project chips (and the publication filters): grey outline, filled blue when selected
            return (
              <Chip
                key={th.id}
                label={th.label}
                size="small"
                clickable
                color={on ? 'primary' : 'default'}
                variant={on ? 'filled' : 'outlined'}
                onClick={() => setSel(on ? { kind: 'none' } : { kind: 'projects', ids: th.projects, themeId: th.id })}
                aria-pressed={on}
                sx={{ fontWeight: 600 }}
              />
            );
          })}
        </ControlRow>
        <ControlRow label="Projects">{mapProjects.map(renderPill)}</ControlRow>
      </Box>

      {/* the layered map */}
      <Box
        role="region"
        aria-label="Expertise map"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: '104px minmax(0, 1fr)' },
          gridTemplateAreas: { xs: '"dl" "dom" "sl" "svc" "fl" "fac"', lg: '"dl dom" "sl svc" "fl fac"' },
          columnGap: 2,
          rowGap: { xs: 1, lg: 1.5 },
        }}
      >
        {rowLabel('dl', 'Application domains')}
        <Box
          sx={{
            gridArea: 'dom',
            display: 'grid',
            // two even rows from tablet width up
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: `repeat(${Math.ceil(domains.length / 2)}, minmax(0, 1fr))`,
            },
            gap: 0.75,
          }}
        >
          {domains.map((d) => renderItem(d, primary, { neutral: true, center: true, showProjects: true }))}
        </Box>

        {rowLabel('sl', 'Software services', true)}
        <Box
          sx={{
            gridArea: 'svc',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            p: { xs: 1.25, md: 1.75 },
            borderRadius: 2.5,
            bgcolor: alpha(BAND_COLOR, dark ? 0.1 : 0.07),
          }}
        >
          {renderRow('Interfaces', interfaces)}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'minmax(0, 1fr)',
                sm: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(5, minmax(0, 1fr))',
              },
              gap: 1.25,
            }}
          >
            {services.map(renderCard)}
          </Box>
          {renderRow('Workflow', workflow)}
        </Box>

        {rowLabel('fl', 'Built on')}
        <Box
          sx={{
            gridArea: 'fac',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              md: `repeat(${facilities.length}, minmax(0, 1fr))`,
            },
            gap: 0.75,
          }}
        >
          {facilities.map((f) =>
            renderItem(f, FACILITY_COLOR, {
              neutral: true,
              center: true,
              neutralBg: '#E6E6E6',
              labelColor: dark ? lighten(FACILITY_COLOR, 0.6) : FACILITY_COLOR,
            }),
          )}
        </Box>
      </Box>

      {/* legend, under the map like a figure's key */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          columnGap: 2.5,
          rowGap: 0.75,
          mt: 2,
          fontSize: 12.5,
          color: 'text.secondary',
        }}
      >
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
          <Box sx={{ width: 22, height: 14, borderRadius: 1, bgcolor: alpha(BAND_COLOR, dark ? 0.3 : 0.15) }} />
          Delivered (tap to see where)
        </Box>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
          <Box sx={{ width: 22, height: 14, borderRadius: 1, border: '1px dashed', borderColor: 'text.disabled' }} />
          Roadmap
        </Box>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
          <CodeIcon sx={{ fontSize: 15 }} /> Open-source code
        </Box>
      </Box>

      {/* details for the current selection */}
      <Box aria-live="polite" sx={{ mt: 3.5 }}>
        {sel.kind === 'none' && (
          // a pointing hand in the accent colour, so the prompt stands out from the grey text around the map
          <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 1 }}>
            <TouchAppIcon sx={{ fontSize: 22, color: 'primary.main', flexShrink: 0 }} />
            Pick a theme or a project above, or tap any coloured item in the map, to see how the pieces connect.
          </Typography>
        )}

        {sel.kind === 'projects' && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'minmax(0, 1fr)',
                md: sel.ids.length > 1 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
              },
              gap: 2,
            }}
          >
            {inOrder(sel.ids).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>
        )}

        {sel.kind === 'item' && (
          <ItemDetails item={sel.item} onShowProject={(id) => setSel({ kind: 'projects', ids: [id] })} />
        )}
      </Box>
    </Box>
  );
};

export default ExpertiseMap;
