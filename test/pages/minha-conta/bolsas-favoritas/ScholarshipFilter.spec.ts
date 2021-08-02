import { shallowMount, Wrapper } from '@vue/test-utils';
import ScholarshipFilter from '~/components/pages/minha-conta/bolsas-favoritas/ScholarshipFilter.vue';
import CitiesService from '~/services/CitiesService';
import CoursesService from '~/services/CoursesService';
import ScholarshipService from '~/services/ScholarshipService';
import cities from '~/api/cities';
import { IScholarship } from '~/models/IScholarship';
import { IQuerySearch } from '~/models/IQuerySearch';
import { IScholarshipComponent } from '~/test/mocks/models/IScholarshipFilterComponent';

describe('Components - ScholarshipFilter', () => {
  describe('On Mounted', () => {
    it('Should return the correct cityOptions ', () => {
      const wrapper: Wrapper<Vue> = mountComponent();
      expect(JSON.stringify(wrapper.vm.$data.cityOptions)).toBe(JSON.stringify(cities));
      expect(JSON.stringify(wrapper.vm.$data.city)).toBe(JSON.stringify(cities[0]));
    });

    it('Should return the correct courseOptions ', () => {
      const wrapper: Wrapper<Vue> = mountComponent();
      const expectedCourses = [
        { id: 'todososcursos', label: 'Todos os Cursos' },
        { id: 'administracao', label: 'Administração' },
        { id: 'arquiteturaeurbanismo', label: 'Arquitetura e Urbanismo' },
        { id: 'biomedicina', label: 'Biomedicina' },
        { id: 'cienciadacomputacao', label: 'Ciência da Computação' },
        { id: 'cienciaseconomicas', label: 'Ciências Econômicas' },
        { id: 'educacaofisica', label: 'Educação Física' },
        { id: 'engenhariamecanica', label: 'Engenharia Mecânica' },
        { id: 'farmacia', label: 'Farmacia' },
        { id: 'gastronomia', label: 'Gastronomia' },
        { id: 'gestaoderecursoshumanos', label: 'Gestão de Recursos Humanos' },
        { id: 'historia', label: 'História' },
        { id: 'jogosdigitais', label: 'Jogos Digitais' },
        { id: 'jornalismo', label: 'Jornalismo' },
        { id: 'marketing', label: 'Marketing' },
        { id: 'propagandaemarketing', label: 'Propaganda e Marketing' },
        { id: 'sistemasdeinformacao', label: 'Sistemas de Informação' },
      ];
      expect(JSON.stringify(wrapper.vm.$data.courseOptions)).toBe(JSON.stringify(expectedCourses));
      expect(JSON.stringify(wrapper.vm.$data.course)).toBe(JSON.stringify(expectedCourses[0]));
    });

    it('Should return the correct default kindList ', () => {
      const wrapper: Wrapper<Vue> = mountComponent();
      expect(JSON.stringify((wrapper.vm as IScholarshipComponent).kindList)).toBe(JSON.stringify(['Presencial', 'EaD']));
    });

    it('Should return the correct default kindList ', () => {
      const wrapper: Wrapper<Vue> = mountComponent();
      expect(JSON.stringify((wrapper.vm as IScholarshipComponent).kindList)).toBe(JSON.stringify(['Presencial', 'EaD']));
    });

    it('Should return the correct default query ', () => {
      const wrapper: Wrapper<Vue> = mountComponent();
      const expectedQuery: IQuerySearch = {
        city: 'Todas as Cidades',
        course: 'Todos os Cursos',
        kind: ['Presencial', 'EaD'],
        priceWithDiscount: 10000,
      };
      expect(JSON.stringify((wrapper.vm as IScholarshipComponent).query)).toBe(JSON.stringify(expectedQuery));
    });
  });

  describe('On Change', () => {
    describe('On Change KindOfStudy', () => {
      it('Shold return EaD ', async () => {
        const wrapper: Wrapper<Vue> = mountComponent();
        await wrapper.setData({ kindOfStudy: { faceToface: false, distance: true } });
        expect(JSON.stringify((wrapper.vm as IScholarshipComponent).kindList)).toBe(JSON.stringify(['EaD']));
      });

      it('Shold return Presencial ', async () => {
        const wrapper: Wrapper<Vue> = mountComponent();
        await wrapper.setData({ kindOfStudy: { faceToface: true, distance: false } });
        expect(JSON.stringify((wrapper.vm as IScholarshipComponent).kindList)).toBe(JSON.stringify(['Presencial']));
      });

      it('Shold return Presencial and EaD ', async () => {
        const wrapper: Wrapper<Vue> = mountComponent();
        await wrapper.setData({ kindOfStudy: { faceToface: true, distance: true } });
        expect(JSON.stringify((wrapper.vm as IScholarshipComponent).kindList)).toBe(JSON.stringify(['Presencial', 'EaD']));
      });
    });

    it('Should emit update event on query change', async () => {
      const wrapper: Wrapper<Vue> = mountComponent();
      await wrapper.setData({ city: { label: 'Jacareí', id: 'jacarei' } });
      const expectedEmmited: IScholarship[][][] = [
        [
          [
            {
              id: 19,
              fullPrice: 414.14,
              priceWithDiscount: 207.07,
              discountPercentage: 50,
              startDate: '01/08/2019',
              enrollmentSemester: '2019.2',
              enabled: true,
              course: { id: 'sistemasdeinformacao', name: 'Sistemas de Informação', kind: 'EaD', level: 'Bacharelado', shift: 'Virtual' },
              university: { name: 'Estácio', score: 4.1, logoUrl: 'https://www.tryimg.com/u/2019/04/16/estacio.png' },
              campus: { name: 'Centro', city: 'Jacareí' },
            },
          ],
        ],
      ];

      expect(wrapper.emitted().update).toEqual(expectedEmmited);
    });
  });
});

function mountComponent(): Wrapper<Vue> {
  return shallowMount(ScholarshipFilter, {
    data() {
      return {
        citiesService: new CitiesService(),
        coursesService: new CoursesService(),
        scholarshipService: new ScholarshipService(),
      };
    },
  });
}
