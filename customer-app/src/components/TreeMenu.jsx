import { useState } from "react";

// Depth in the tree maps to a field on each customer
const LEVELS = ["country", "state", "city"];

function TreeNode({ node, depth, selectedNode, onSelect }) {
  const [open, setOpen] = useState(depth === 0);
  const hasChildren = node.children && node.children.length > 0;
  const level = LEVELS[depth];
  const isSelected =
    selectedNode?.level === level && selectedNode?.name === node.name;

  const handleClick = () => {
    if (hasChildren) setOpen(!open);
    onSelect({ level, name: node.name });
  };

  return (
    <li>
      <div
        className={isSelected ? "tree-item selected" : "tree-item"}
        style={{ paddingLeft: 12 + depth * 16 }}
        onClick={handleClick}
      >
        <span className="tree-toggle">
          {hasChildren ? (open ? "-" : "+") : ""}
        </span>
        {node.name}
      </div>

      {hasChildren && open && (
        <ul>
          {node.children.map((child) => (
            <TreeNode
              key={child.name}
              node={child}
              depth={depth + 1}
              selectedNode={selectedNode}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function TreeMenu({ nodes, selectedNode, onSelect }) {
  return (
    <ul className="tree-menu">
      {nodes.map((node) => (
        <TreeNode
          key={node.name}
          node={node}
          depth={0}
          selectedNode={selectedNode}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}

export default TreeMenu;
