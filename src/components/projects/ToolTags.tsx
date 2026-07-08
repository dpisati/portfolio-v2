import { toolLookup } from "@/resources/tools";
import { Row, Tag } from "@once-ui-system/core";

interface ToolTagsProps {
  /** Tool ids that map to entries in tools.ts */
  tools: string[];
  size?: "s" | "m" | "l";
}

export function ToolTags({ tools, size = "m" }: ToolTagsProps) {
  return (
    <Row wrap gap="8">
      {tools.map((toolId) => {
        const meta = toolLookup[toolId];
        if (!meta) return null;
        return (
          <Tag
            key={toolId}
            size={size}
            style={{
              background: meta.backgroundColor,
              color: meta.textColor,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "4px 8px",
            }}
          >
            {meta.title}
          </Tag>
        );
      })}
    </Row>
  );
}
