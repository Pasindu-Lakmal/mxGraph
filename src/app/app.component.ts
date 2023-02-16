import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var mxGraph: any;
declare var mxHierarchicalLayout: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('graphContainer') graphContainer: ElementRef;
  ngAfterViewInit() {
    const graph = new mxGraph(this.graphContainer.nativeElement);
    try {
      const parent = graph.getDefaultParent();
      graph.getModel().beginUpdate();
      //Creating Shapes
      const vertex1 = graph.insertVertex(
        parent,
        null,
        'Vertex 1',
        0,
        0,
        200,
        80
      );
      const vertex2 = graph.insertVertex(
        parent,
        null,
        'Vertex 2',
        0,
        0,
        200,
        80
      );
      const vertex3 = graph.insertVertex(
        parent,
        null,
        'Vertex 3',
        0,
        0,
        200,
        80
      );
      const vertex4 = graph.insertVertex(
        parent,
        null,
        'Vertex 4',
        100,
        100,
        400,
        150,
        'shape=ellipse'
      );
      //Creating parent child realtionship
      graph.insertEdge(parent, null, null, vertex1, vertex2);
      graph.insertEdge(parent, null, null, vertex1, vertex3);
      graph.insertEdge(parent, null, null, vertex3, vertex4);
    } finally {
      graph.getModel().endUpdate();
      new mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
    }
  }
}
