import { Component } from '@angular/core';
import { Point } from './components/Image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JPGProject';
  images = [
    { id: '1', img: '../assets/images/X001.jpg' },
    { id: '2', img: '../assets/images/x002.jpg' },
    // { img: '../assets/images/x003.jpg' },
    // { img: '../assets/images/X004.jpg' },
    // { img: '../assets/images/X005.jpg' },
    // { img: '../assets/images/X006.jpg' },
    // { img: '../assets/images/X007.jpg' },
    // { img: '../assets/images/X008.jpg' },
    // { img: '../assets/images/x009.jpg' },
    // { img: '../assets/images/x010.jpg' },
    // { img: '../assets/images/x012.jpg' },
    // { img: '../assets/images/x013.jpg' },
    // { img: '../assets/images/x014.jpg' },
    // { img: '../assets/images/x002 (2).jpg' },
    // { img: '../assets/images/x003 (2).jpg' },
    // { img: '../assets/images/x004 (2).jpg' },
    // { img: '../assets/images/X005 (2).jpg' },
    // { img: '../assets/images/X006 (2).jpg' },
    // { img: '../assets/images/X008 (2).jpg' },
    // { img: '../assets/images/x009 (2).jpg' },
    // { img: '../assets/images/x010 (2).jpg' },
    // { img: '../assets/images/x012 (2).jpg' },
    // { img: '../assets/images/x013 (2).jpg' },
    // { img: '../assets/images/x014 (2).jpg' },
    // { img: '../assets/images/x015 (2).jpg' },
    // { img: '../assets/images/x010 (3).jpg' },
    // { img: '../assets/images/x012 (2).jpg' },
    // { img: '../assets/images/x013 (2).jpg' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    draggable: false,
  };

  csv = [
    ['Id', 'ImageName', 'FirstX', 'FirstY', 'SecondX', 'SecondY', 'Distance'],
  ];

  handleCalcDistance = (event: {
    id: string;
    name: string;
    point: Point[];
    distance: number;
  }) => {
    const idx = this.csv.findIndex((li) => li[0] === event.id);
    if (idx !== -1) {
      this.csv[idx] = [
        event.id,
        event.name,
        `${event.point[0].clientX}`,
        `${event.point[0].clientY}`,
        `${event.point[1].clientX}`,
        `${event.point[1].clientY}`,
        `${event.distance}`,
      ];
      return;
    }
    this.csv.push([
      event.id,
      event.name,
      `${event.point[0].clientX}`,
      `${event.point[0].clientY}`,
      `${event.point[1].clientX}`,
      `${event.point[1].clientY}`,
      `${event.distance}`,
    ]);
  };

  handleExportCsv = () => {
    let csvContent =
      'data:text/csv;charset=utf-8,' +
      this.csv.map((e) => e.join(',')).join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'my_data.csv');
    document.body.appendChild(link); // Required for FF

    link.click();
  };
}
