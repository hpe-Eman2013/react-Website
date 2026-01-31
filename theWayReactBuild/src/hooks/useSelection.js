import { useCallback, useMemo, useState } from "react";

export default function useSelection(items, getId = (x) => x._id) {
  const [selectedIds, setSelectedIds] = useState(() => new Set());

  // Derived values
  const selectedCount = selectedIds.size;

  const allSelected = useMemo(() => {
    if (!items || items.length === 0) return false;
    return selectedIds.size === items.length;
  }, [items, selectedIds]);

  const isSelected = (id) => selectedIds.has(id);

  const toggleOne = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelectedIds((prev) => {
      if (!items || items.length === 0) return new Set(prev);
      if (prev.size === items.length) return new Set();
      return new Set(items.map(getId));
    });
  };

  const clear = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const remove = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const selectedArray = () => Array.from(selectedIds);

  return {
    selectedIds,
    selectedCount,
    allSelected,
    isSelected,
    toggleOne,
    toggleAll,
    clear,
    remove,
    selectedArray,
    setSelectedIds, // exposed for rare cases
  };
}
