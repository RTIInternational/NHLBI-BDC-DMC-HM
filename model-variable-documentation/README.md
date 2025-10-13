# Integrated Model-Variable Documentation

## Model schema
[bdchm.schema.json](https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/generated/bdchm.schema.json)
<!--
Use [bdchm.yaml](https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/src/bdchm/schema/bdchm.yaml)
or [bdchm.schema.json](https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/generated/bdchm.schema.json),
which is currently out of date?

The json file seems like it should generated on
[push to main](https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/main/.github/workflows/deploy_bdchm_docs.yml)
which calls genjsonschema from the
[Makefile](https://github.com/RTIInternational/NHLBI-BDC-DMC-HM/blob/7b800a1c43c10ebf8f7009fce810f9835e17c230/Makefile#L203-L204):

```
genjsonschema: 
	$(RUN) gen-json-schema $(SOURCE_SCHEMA_PATH) > $(GENERATEDDIR)/bdchm.schema.json
```
-->


## Variable spec input
Variable specifications come from 
[Variable specs Table S1](https://docs.google.com/spreadsheets/d/1PDaX266_H0haa0aabMYQ6UNtEKT5-ClMarP0FvNntN8/edit?gid=0#gid=0),
which have been saved to [./variable-specs-S1.tsv](./variable-specs-S1.tsv). Will need
to keep the tsv up-to-date with the spreadsheet.


## About the data
* Model:
   * 49 classes
   * 7 slots
   * 40 enums
* 152 variables

...

-----
This demo https://cs.brown.edu/people/jcmace/d3/graph.html?id=small.json might be something I could
start with.

Or, from [claude.ai](https://claude.ai/share/09bc27cc-ceda-4690-9ac6-710bea7ca3a4):

You're absolutely right - I was only talking about the class hierarchy being a tree (well, probably a tree - LinkML allows multiple inheritance, so it *could* be a DAG even for just classes).

Once you add variables → classes connections, yes, definitely a DAG. Multiple variables will map to the same class, and a variable might even reference multiple classes.

**Your Shneiderman-influenced approach makes perfect sense here.** Since the use cases are vague, building for exploration rather than specific queries is the right call.

Here's a concrete structure following "overview first, zoom and filter, details on demand":

### Overview layer:
- **Main view**: Show the 49 classes in a hierarchical layout (tree/DAG of inheritance)
- **Color/size encoding**: Maybe size by "how many variables reference this" or "how many attributes"
- **Quick stats**: "152 variables mapped across 49 classes, 40 enums"

### Zoom and filter:
- **Click a class**: Highlight its neighborhood - parent classes, child classes, which enums it uses, which variables map to it
- **Search/filter bar**: Type "observation" and dim everything else
- **Faceted filters**: "Show only classes with >5 variables" or "Show only measurement-related"
- **View toggles**: Switch between "class hierarchy only" vs "classes + variables" vs "classes + enums"

### Details on demand:
- **Side panel**: Click any node → show full LinkML definition, variable specs, attributes
- **Tooltips**: Hover for quick info

**For the layout**, I'd actually suggest starting with **multiple coordinated views**:
- Left: Collapsible tree of class hierarchy
- Right: Selected class details + its variables in a simple list
- Optional: Mini bipartite view showing selected-class-to-variables

This is less "cool" than one giant graph, but way more usable. You can build it faster and users can actually navigate it.

Want to take a quick look at the actual schema structure to see if this makes sense?
