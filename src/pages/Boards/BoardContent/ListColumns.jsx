import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import {
  DndContext,
  PointerSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });
  const sensors = useSensors(pointerSensor);

  const [oderedColumns, setOderedColumns] = useState([]);

  useEffect(() => {
    setOderedColumns(mapOrder(board?.columns, board?.columnOrderIds, "_id"));
  }, [board]);

  const handleDragEnd = (event) => {
    console.log(event);
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = oderedColumns.findIndex((c) => c._id === active.id);
      const newIndex = oderedColumns.findIndex((c) => c._id === over.id);

      const dndOderedColumns = arrayMove(oderedColumns, oldIndex, newIndex);
      // const dndOderedColumnsIds = dndOderedColumns.map((c) => c._id);

      setOderedColumns(dndOderedColumns);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          width: "100%",
          height: (theme) => theme.trelloCustom.boardContentHeight,
          p: "10px 0",
        }}
      >
        <ListColumns columns={oderedColumns} />
      </Box>
    </DndContext>
  );
}

export default BoardContent;
