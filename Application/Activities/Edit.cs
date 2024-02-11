

using AutoMapper;
using Domain;

using MediatR;
using Persistence;
using static Application.Activities.Edit;


namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {


        public Activity Activity { get; set;}
        }
    }


    public class Handler : IRequestHandler<Command>
    {
        private readonly DataContext _context;

        private readonly IMapper _mapper;

        public Handler (DataContext context, IMapper mapper)
        {
            _mapper= mapper;
            _context=context;
        }

        async Task IRequestHandler<Command>.Handle(Command request, CancellationToken cancellationToken)
        {
             var activity= await _context.Activities.FindAsync(request.Activity.Id);
        _mapper.Map(request.Activity, activity);

          await _context.SaveChangesAsync();

        }
    }
}